import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from "./AppNavbar";
import {Link} from 'react-router-dom';


class StatsSpend extends Component {

    constructor(props) {
        super(props);
        this.state = {statsSpend: []};
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
        fetch('/currencies/getStatsSpend')
            .then(response => response.json())
            .then(data => this.setState({statsSpend: data}));
    }

    render() {
        const {statsSpend} = this.state;

        const statsSpendList = statsSpend.map(statsSpend => {
            return <tr key={statsSpend.id}>
                <td style={{whiteSpace: 'nowrap'}}>{statsSpend.chatId}</td>
                <td>{statsSpend.spend}</td>
                <td>{statsSpend.dateStart}</td>
                <td>{statsSpend.dateTime}</td>
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
                            <th width="10%">spend</th>
                            <th width="10%">dateStart</th>
                            <th width="10%">dateTime</th>
                        </tr>
                        </thead>
                        <tbody>
                        {statsSpendList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default StatsSpend;