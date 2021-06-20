import React, { Component } from 'react';
import { FiClipboard, FiCheck } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class QuoteMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
            quote: null,
            author: null,
            copied: false
        }
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
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

    render() {
        return (
            <div className='quoteMachine'>
                <p 
                    className='quote'
                    style={{
                        color: this.props.color,
                        transition: "all .5s ease"
                    }}
                ><FaQuoteLeft className='quotemark' />{this.state.quote}</p>
                <p 
                    className='author'
                    style={{
                        color: this.props.color,
                        transition: "all .5s ease"
                    }} 
                >- {this.state.author}</p>
                <div className='buttons'>
                    <CopyToClipboard text={this.state.quote + ' - ' + this.state.author}
                        onCopy={() => {
                            this.setState({copied: true});
                            setTimeout(
                                () => this.setState({copied: false}),
                                3000
                            );
                        }}>
                        <button 
                            className='copy'
                            style={{
                                backgroundColor: this.props.color,
                                transition: "all .5s ease"
                            }} 
                            >
                            {
                                this.state.copied === true
                                    ? <FiCheck style={{
                                        color: 'rgb(50, 50, 50)'
                                    }} /> 
                                    : <FiClipboard />
                            }
                        </button>
                    </CopyToClipboard>
                    <button 
                        className='newQuote'
                        style={{
                            backgroundColor: this.props.color,
                            transition: "all .5s ease"
                        }} 
                        onClick={() => {
                            this.getQuote();
                            this.props.changeColor();
                            this.setState({
                                copied: false
                            });
                        }}
                    >New quote</button>
                </div>
            </div>
        );
    }
} 

export default QuoteMachine;