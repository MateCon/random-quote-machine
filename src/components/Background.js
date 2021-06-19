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
                    backgroundColor: this.props.color
                }} 
            />
        );
    }
}

export default Background;