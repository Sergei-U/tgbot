import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from "./AppNavbar";
import {Link} from 'react-router-dom';


class StatsIncomes extends Component {

    constructor(props) {
        super(props);
        this.state = {statsIncomes: []};
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleAmountSubmit = this.handleAmountSubmit.bind(this);
    }
    handleCodeChange(event) {
        this.setState({code: event.target.code});
    }
    handleCodeSubmit(event) {
        event.preventDefault();
    }
    handleAmountChange(event) {
        this.setState({amount: event.target.amount});
    }
    handleAmountSubmit(event) {
        event.preventDefault();
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
                        <ButtonGroup>
                            <input type="text" value={this.state.code} onChange={this.handleCodeChange} />
                            <Button color="success" tag={Link} to={`/currencies/Currencies/${this.state.code}`}>getCurrencies by code</Button>
                            <input type="number" step="0.1" value={this.state.amount} onChange={this.handleAmountChange} />
                            <Button color="success" tag={Link} to={`/currencies/StatsIncomes?amount=${this.state.amount}`}>getStatsIncomes</Button>
                            <Button color="success" tag={Link} to={`/currencies/StatsIncomes?amount=${this.state.amount}`}>getStatsSpend</Button>
                            <Button color="success" tag={Link} to={`/currencies/StatsIncomes?amount=${this.state.amount}`}>getStatsIncomesDate</Button>
                            <Button color="success" tag={Link} to={`/currencies/StatsIncomes?amount=${this.state.amount}`}>getStatsSpendDate</Button>
                        </ButtonGroup>
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