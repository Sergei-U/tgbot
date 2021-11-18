import React, {Component, useState} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from "./AppNavbar";
import { Link } from 'react-router-dom';


class StatsSpendDate extends Component {


    constructor(props) {
        super(props);
        this.state = {currencies: []};
    }

    componentDidMount() {
        fetch('/currencies/getStatsSpendDate')
            .then(response => response.json())
            .then(data => this.setState({currencies: data}));
    }

    render() {
        const {statsSpend} = this.state;
        const [input, setInput] = useState('');
        const [amount, setAmount] = useState('');
        const statsSpendList = statsSpend.map(statsSpend => {
            return <tr key={statsSpend.id}>
                <td style={{whiteSpace: 'nowrap'}}>{statsSpend.chatId}</td>
                <td>{statsSpend.income}</td>
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
                            <input value={input} onInput={e => setInput(e.target.value)}/>
                        <Button color="success" tag={Link} to="/currencies/Currencies/"{input}>getCurrencies by code</Button>
                            <input value={amount} onInput={e => setAmount(e.target.value)}/>
                            <Button color="success" tag={Link} to="/currencies/StatsIncomes?amount="{amount}>getStatsIncomes</Button>
                        <Button color="success" tag={Link} to="/currencies/StatsSpend?amount="{amount}>getStatsSpend</Button>
                        <Button color="success" tag={Link} to="/currencies/StatsIncomesDate?amount="{amount}>getStatsIncomesDate</Button>
                        <Button color="success" tag={Link} to="/currencies/StatsSpendDate?amount="{amount}>getStatsSpendDate</Button>
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
                        {statsSpendList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default StatsSpendDate;