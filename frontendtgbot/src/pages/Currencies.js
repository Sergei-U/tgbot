import React, {Component, useState} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from "./AppNavbar";
import { Link } from 'react-router-dom';


class Currencies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currencies: []};
        this.md = new Remarkable();
        this.codeChange = this.codeChange.bind(this);
        this.amountChange = this.amountChange.bind(this);
    }

    componentDidMount() {
        fetch('/currencies/getCurrencies')
            .then(response => response.json())
            .then(data => this.setState({currencies: data}));
    }

    codeChange(e) {
        this.setState({ value: e.target.value });
    }

    amountChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
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
                            <textarea
                                id="code-content"
                                onChange={this.codeChange}
                                defaultValue={this.state.value}
                            />
                            <Button color="success" tag={Link} to="/currencies/Currencies/"{this.getRawMarkup()}>getCurrencies by code</Button>
                            <textarea
                                id="amount-content"
                                onChange={this.amountChange}
                                defaultValue={this.state.value}
                            />
                            <Button color="success" tag={Link} to="/currencies/StatsIncomes?amount="{this.getRawMarkup()}>getStatsIncomes</Button>
                            <Button color="success" tag={Link} to="/currencies/StatsSpend?amount="{this.getRawMarkup()}>getStatsSpend</Button>
                            <Button color="success" tag={Link} to="/currencies/StatsIncomesDate?amount="{this.getRawMarkup()}>getStatsIncomesDate</Button>
                            <Button color="success" tag={Link} to="/currencies/StatsSpendDate?amount="{this.getRawMarkup()}>getStatsSpendDate</Button>
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