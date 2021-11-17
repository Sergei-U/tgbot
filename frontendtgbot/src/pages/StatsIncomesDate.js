import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';
import AppNavbar from "./AppNavbar";
import { Link } from 'react-router-dom';


class StatsIncomesDate extends Component {

    constructor(props) {
        super(props);
        this.state = {currencies: []};
    }

    componentDidMount() {
        fetch('/currencies/getCurrencies')
            .then(response => response.json())
            .then(data => this.setState({currencies: data}));
    }

    render() {
        const {currencies} = this.state;

        const currenciesList = currencies.map(currencies => {
            return <tr key={currencies.id}>
                <td style={{whiteSpace: 'nowrap'}}>{currencies.name}</td>
                <td>{currencies.nominal}</td>
                <td>{currencies.course}</td>
                <td>{currencies.code}</td>
                <td>{currencies.chCode}</td>
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
                            <th width="30%">Name</th>
                            <th width="30%">nominal</th>
                            <th width="10%">course</th>
                            <th width="10%">code</th>
                            <th width="10%">chCode</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currenciesList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default StatsIncomesDate;