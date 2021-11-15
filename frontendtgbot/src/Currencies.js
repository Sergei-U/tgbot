import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class Currencies extends Component {

    constructor(props) {
        super(props);
        this.state = {currencies: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/currencies')
            .then(response => response.json())
            .then(data => this.setState({currencies: data}));
    }

    // async remove(id) {
    //     await fetch(`/clients/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(() => {
    //         let updatedClients = [...this.state.clients].filter(i => i.id !== id);
    //         this.setState({clients: updatedClients});
    //     });
    // }

    render() {
        const {currencies} = this.state;

        const currenciesList = currencies.map(currenciess => {
            return <tr key={currenciess.id}>
                <td style={{whiteSpace: 'nowrap'}}>{currenciess.name}</td>
                <td>{currenciess.nominal}</td>
                <td>{currenciess.course}</td>
                <td>{currenciess.code}</td>
                <td>{currenciess.chCode}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/currencies/" + currenciess.name}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(currencies.name)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/currencies/new">Add currencies</Button>
                    </div>
                    <h3>Currencies</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Email</th>
                            <th width="40%">Actions</th>
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