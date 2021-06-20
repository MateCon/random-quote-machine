import React, { Component } from 'react';

class Background extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
                className='background'
                style={{
                    backgroundColor: this.props.color,
                    transition: "all .5s ease"
                }} 
            />
        );
    }
}

export default Background;