import React, { Component } from 'react';


class Card extends Component {
    static defaultProps = {
        numOfCards: '3'
    }
    constructor() {
        props();
        this.state = { cards: []}
    }

    createCard(num) {
        const length = num;

        return(
            this.state.cards.map((card, index) => (
                <div className="img"></div>
            ))
        )
    }


    render() {
        return(
            <h1>Card</h1>
        )
    }
}

export default Card;