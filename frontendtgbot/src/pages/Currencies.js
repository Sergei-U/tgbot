import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from "./AppNavbar";
import {Link} from "react-router-dom";
import CurrenciesByCode from "./CurrenciesByCode";
import StatsIncomes from "./StatsIncomes";
import StatsSpend from "./StatsSpend";
import StatsIncomesDate from "./StatsIncomesDate";
import StatsSpendDate from "./StatsSpendDate";


class Currencies extends Component {

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
                        <ButtonGroup>
                            <input type="text" value={this.state.code} onChange={this.handleCodeChange} />
                            <Button color="success" tag={Link} to={`/currencies/getCurrencies/${this.state.code}`}>getCurrencies by code</Button>
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

export default Currencies;