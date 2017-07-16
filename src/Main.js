import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Router from './Router';

class Main extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#018BBF" barStyle="light-content" />
                <Router />
            </View>
        );
    }
}

export default Main;
