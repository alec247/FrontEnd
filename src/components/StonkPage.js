import React, { Component } from 'react';
import Logo from "../Images/logo.jpg" ;
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Searchbar from './Searchbar.js'
import CanvasJSReact from './canvasjs.react';
import StonkChart from './StonkChart.js';
import BBChart from './BBChart.js';



//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StonkPage extends React.Component {

    constructor(props){
        super(props);    
    }

    render() {
        return(
            <div>
                <img src={Logo} alt="A logo that looks like the pornhub logo, but says StonkHub"></img>
                <h1>
                    { StonkName } {stonkTicker}
                </h1>
                <Searchbar></Searchbar>
                <p>
                    { StonkPrice }
                    Volume: { StonkVolume }
                    Market Cap: { StonkCap }
                </p>
                <StonkChart StonkTicker=""></StonkChart>
            </div>
        )
    }
}

export default StonkPage;