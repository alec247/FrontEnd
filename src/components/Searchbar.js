import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

class Searchbar extends React.Component {

    constructor(props){
        super(props);
        this.autocomplete = this.autocomplete.bind(this)
    }

    autocomplete(event) {
        var suggestions = document.getElementById('suggestions') 
        
        while (suggestions.children.length >= 1){
            suggestions.removeChild(suggestions.children[0]);
        }
    //ADD SOME TIME SHIT HERE INSTEAD VVV
        if (event.target.value.length >= 3) {
            console.log(event.target.value)
            axios({
                method: 'get',
                url: 'http://localhost:8000/stonkiepoos/' + event.target.value,
                responseType:  'json',
            })
                .then(response =>{
                    console.log(response);
                    var quotes = response.data.quotes.filter(quote => quote.quoteType === "EQUITY").slice(0, 5);

                    for (var quote of quotes) {
                            var item = document.createElement("div");
                            item.className += " list-group-item";
                            item.innerHTML = quote.shortname;
                            suggestions.appendChild(item);
                    }
                })}
    }   

    render(){
        return(
            <div style={{ width: 225, position: "absolute", margin: "5%" } }>
                <InputGroup size="sm" className="mb-3" onChange={this.autocomplete}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search for a Stonk or Ticker"/>
                </InputGroup>
                <ListGroup id="suggestions">

                </ListGroup>
            </div>
        );
    }
}

export default Searchbar;