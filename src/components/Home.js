import React, { Component } from 'react';
import { navigate } from '@reach/router';






class Home extends Component {
    constructor() {
        super();
        this.state = { castle: '', message: ''}
        this.handleInput = this.handleInput.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleFormSubmit(e) {
        const error = "Please enter your search."
        e.preventDefault();

        if(this.state.castle === '' || !this.state.castle.includes('castle'.toLowerCase())) {
            this.setState({ message: error})
        } else {
            this.props.userInput(this.state.castle)
            this.setState({ message: ''})
            navigate('/castles')
        }

        this.setState({ castle: ''})
    }
    render() {
        return (
        <div className="hero">
           <header className="header">
            <h1 className="title">Castles of the 18th Century</h1>
            <form className="castle-search" onSubmit={this.handleFormSubmit }>
                <label>Enter a Castle: </label>
                <input className="search" type="text" value={this.state.castle} name="castle" onChange={this.handleInput} autoComplete="true"/>
                <h6 className="error-msg">{this.state.message}</h6>
            </form>
            
           </header>
        </div>
        )
    }
}

export default Home;