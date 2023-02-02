import Body from "./body";
import { View, Text, StyleSheet } from "react-native";
import React, { Component } from 'react';
import Profiles from "../../assets/Profiles";
import SwipeCards from 'react-native-swipe-cards';

// class component for the cards (stateful + instatiated)
class Card extends Component {
    constructor(props) {
        super(props); // use super constructor
    }

    render() {
        return (
            <Body person={this.props.person}/>
        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
        )
    };
}

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { person: Profiles.mtl },
                { person: Profiles.drell },
                { person: Profiles.man },
                { person: Profiles.woman },
                { person: Profiles.brubakercole },
            ]
        };
        this.handleYup = this.handleYup.bind(this);
        this.handleNope = this.handleNope.bind(this);
        this.handleMaybe = this.handleMaybe.bind(this);
    }
    
    handleYup(card) {
        let tmp = this.state.cards.slice(1);
        this.setState({cards: [...tmp, card]});
    }
    handleNope(card) {
        let tmp = this.state.cards.slice(1);
        this.setState({cards: [...tmp, card]});
    }
    handleMaybe(card) {
        let tmp = this.state.cards.slice(1);
        this.setState({cards: [...tmp, card]});
    }
    render() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
            <SwipeCards
                cards={this.state.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
            />
        )
    }
}


const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
    },
    noMoreCardsText: {
        fontSize: 22,
    }
})