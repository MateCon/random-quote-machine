import React, { Component } from 'react';
import { FiClipboard } from 'react-icons/fi';

class QuoteMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
            quote: null,
            author: null
        }
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote = () => {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => {
                let newQuote = data.quotes[Math.floor(Math.random() * (data.quotes.length - 1))];
                this.setState({
                    quote: newQuote.quote,
                    author: newQuote.author
                });
            });
    }

    componentDidMount() {
        this.getQuote();
    }

    shouldComponentUpdate(nextProps) {
        console.log(this.props.color)
        return nextProps.color !== this.props.color;
    }

    render() {
        return (
            <div className='quoteMachine'>
                <p 
                    className='quote'
                    style={{
                        color: this.props.color,
                        transition: "all .5s ease"
                    }}
                >{this.state.quote}</p>
                <p 
                    className='author'
                    style={{
                        color: this.props.color,
                        transition: "all .5s ease"
                    }} 
                >- {this.state.author}</p>
                <div className='buttons'>
                    <button 
                        className='copy'
                        style={{
                            backgroundColor: this.props.color,
                            transition: "all .5s ease"
                        }} 
                    ><FiClipboard /></button>
                    <button 
                        className='newQuote'
                        style={{
                            backgroundColor: this.props.color,
                            transition: "all .5s ease"
                        }} 
                        onClick={() => {
                            this.getQuote();
                            this.props.changeColor();
                        }}
                    >New quote</button>
                </div>
            </div>
        );
    }
} 

export default QuoteMachine;