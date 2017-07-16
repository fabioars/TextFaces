import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Header from './components/Header';
import FacesList from './components/FacesList';
import TabBar from './components/TabBar';
import TabButton from './components/TabButton';

import faces from './resources/faces.json';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        };
    }
    renderCatergories() {
        return faces.map((categories, index) => (
            <TabButton 
                key={categories.category} 
                selected={(index === this.state.selected)}
                onPress={() => {
                    this.setState({ selected: index });
                }}
            >
                {categories.category}
            </TabButton>
        ));
    }
    render() {
        const { selected } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#018BBF" barStyle="light-content" />
                <Header title="TEXTFACES" />
                <TabBar>{this.renderCatergories()}</TabBar> 
                <FacesList faces={faces[selected].items} /> 
            </View>
        );
    }
}

export default Main;
