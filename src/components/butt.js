import React, { Component } from 'react';

class butt extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bootyhole: this.props.bootyhole,
            buttPhoto: null
        }
    }

    render() {
        // let buttURL = fetch("localhost:3000/butts/")
        //     .then(response => {
        //         console.log("Butt Photo: ", response);
        //         this.state.buttPhoto = response;
        //     });

        return(
            <div>
                <h1>
                    Butt
                </h1>
                <p>
                    { this.state.bootyhole }
                </p>
                <img src={"localhost:3000/butts/"}  alt={"bootyhole"}/>
            </div>
        );
    }
}

export default butt;
