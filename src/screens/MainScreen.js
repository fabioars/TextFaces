import React, { Component } from 'react';
import { View } from 'react-native';
import { 
    FaceList, 
    TabBar, 
    TabButton
} from '../components';

import faces from '../resources/faces.json';

class MainScreen extends Component {

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
                <TabBar>{this.renderCatergories()}</TabBar> 
                <FaceList faces={faces[selected].items} /> 
            </View>
        );
    }
}

MainScreen.navigationOptions = {
    title: 'FontFaces',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#01B9FF',
        elevation: 0
    }
};

export default MainScreen;
