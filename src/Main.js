import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import FacesList from './components/FacesList';

import faces from './resources/faces.json';

class Main extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="FONTFACES" />
                <FacesList faces={faces[0].items} />
                <Header title="<3" />
            </View>
        );
    }
}

export default Main;
