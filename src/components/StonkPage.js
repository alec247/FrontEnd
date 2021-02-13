import React, { Component } from 'react';
import Logo from "../Images/logo.jpg" ;
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Searchbar from './Searchbar.js'

class StonkPage extends React.Component {

    constructor(props){
        super(props);    
    }

    render() {
        return(
            <div>
                <img src={Logo} alt="A logo that looks like the pornhub logo, but says StonkHub"></img>
                <h1>
                    { StonkName } {StonkTicker}
                </h1>
                <Searchbar></Searchbar>
                <p>
                    { StonkPrice }
                    Volume: { StonkVolume }
                    Market Cap: { StonkCap }
                </p>
            </div>
        );
    }
}

export default StonkPage;