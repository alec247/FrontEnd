import React, { Component } from 'react';

class Butt extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bootyhole: this.props.bootyhole,
            buttPhoto: null
        }
    }

    render() {
        return(
            <div>
                <h1>
                    Butt
                </h1>
                <p>
                    { this.state.bootyhole }
                </p>
                <img src={ "http://localhost:8000/butts/preview.jpg" }  alt={"bootyhole"} height={180} width={320}/>
            </div>
        );
    }
}

export default Butt;
