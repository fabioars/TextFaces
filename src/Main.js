import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import FacesList from './components/FacesList';

import faces from './resources/faces.json';

class Main extends Component {

    render() {
        return (
            <View>
                <Header title="FONTFACES" />
                <FacesList faces={faces} categoryIndex={0} />
            </View>
        );
    }
}

export default Main;
