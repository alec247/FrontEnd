import React, { Component } from 'react';
import Logo from "../Images/logo.jpg" ;
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

class MainPage extends React.Component {

    constructor(props){
        super(props);
        this.state = { subheading: this.props.subheading }
    }

    render() {
        return(
            <div>
                <img src={Logo} alt="A logo that looks like the pornhub logo, but says StonkHub"></img>
                <p>
                    { this.state.subheading }
                </p>
                <div style={{ width: 225 }}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">
                                
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search for a Stonk or Ticker"/>
                    </InputGroup>
                </div>
                <div style={{ width: 200, position: "fixed", left: "25%" }}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ticker</th>
                                <th>Stonk</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>idStonk.functioncall</td>
                                <td>Ticker.functioncall</td>
                                <td>StonkName.functioncall</td>
                            </tr>
                            <tr>
                                <td>idStonk.functioncall</td>
                                <td>Ticker.functioncall</td>
                                <td>StonkName.functioncall</td>
                            </tr>
                            <tr>
                                <td>idStonk.functioncall</td>
                                <td>Ticker.functioncall</td>
                                <td>StonkName.functioncall</td>
                            </tr>
                            <tr>
                                <td>idStonk.functioncall</td>
                                <td>Ticker.functioncall</td>
                                <td>StonkName.functioncall</td>
                            </tr>
                            <tr>
                                <td>idStonk.functioncall</td>
                                <td>Ticker.functioncall</td>
                                <td>StonkName.functioncall</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default MainPage;