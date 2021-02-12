import React, { Component } from 'react';

class Butt extends React.Component {

    constructor(props){
        super(props);
        this.state = { bootyhole: this.props.bootyhole }
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
            </div>
        );
    }
}

export default Butt;