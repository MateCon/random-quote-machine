import React, { Component } from 'react';

const SATURATION = 80;
const LIGHTNESS = 80;

const generateColor = (saturation, lightness) => {
    return `hsl(${Math.floor(Math.random() * 20) * 18}, ${saturation}%, ${lightness}%)`;
}

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saturation: SATURATION,
            lightness: LIGHTNESS,
            color: generateColor(SATURATION, LIGHTNESS)
        };
    }

    render() {
        console.log(this.state.color)
        return (
            <div 
                className='background'
                style={{
                    backgroundColor: this.state.color
                }} 
            />
        );
    }
}

export default Background;