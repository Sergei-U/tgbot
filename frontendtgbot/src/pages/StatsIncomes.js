import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';
import AppNavbar from "./AppNavbar";
import { Link } from 'react-router-dom';


class StatsIncomes extends Component {

    constructor(props) {
        super(props);
        this.state = {currencies: []};
    }

    componentDidMount() {
        fetch('/currencies/getStatsIncomes')
            .then(response => response.json())
            .then(data => this.setState({currencies: data}));
    }

    render() {
        const {statsIncomes} = this.state;

        const statsIncomesList = statsIncomes.map(statsIncomes => {
            return <tr key={statsIncomes.id}>
                <td style={{whiteSpace: 'nowrap'}}>{statsIncomes.chatId}</td>
                <td>{statsIncomes.income}</td>
                <td>{statsIncomes.dateStart}</td>
                <td>{statsIncomes.dateTime}</td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/currencies/Currencies/{code}">getCurrencies by code</Button>
                        <Button color="success" tag={Link} to="/currencies/StatsIncomes">getStatsIncomes</Button>
                        <Button color="success" tag={Link} to="/currencies/StatsSpend">getStatsSpend</Button>
                        <Button color="success" tag={Link} to="/currencies/StatsIncomesDate">getStatsIncomesDate</Button>
                        <Button color="success" tag={Link} to="/currencies/StatsSpendDate">getStatsSpendDate</Button>
                    </div>
                    <h3>Currencies</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">id</th>
                            <th width="30%">chatId</th>
                            <th width="10%">income</th>
                            <th width="10%">dateStart</th>
                            <th width="10%">dateTime</th>
                        </tr>
                        </thead>
                        <tbody>
                        {statsIncomesList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default StatsIncomes;