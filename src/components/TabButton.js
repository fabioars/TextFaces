import React, { Component } from 'react';
import { 
    TouchableWithoutFeedback, 
    Text, 
    View 
} from 'react-native';

class TabButton extends Component {

    render() {
        const { onPress, children, style, selected } = this.props;
        return (
            <TouchableWithoutFeedback onPress={onPress} >
                <View 
                    style={[
                        styles.containerStyle,
                        selectedStyle(selected),
                        style
                    ]}
                >
                    <Text style={selectedTextStyle(selected)}>{children}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

TabButton.defaultProps = {
    selected: false
};

const selectedStyle = status => ((status) ? styles.selected : styles.unselected);

const selectedTextStyle = status => ((status) ? styles.textSelected : styles.textUnselected);

const styles = {
    containerStyle: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 5,
        marginRight: 5, 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 50
    },
    selected: {
        borderColor: '#fff',
        backgroundColor: '#fff'
    },
    unselected: {
        borderColor: '#fff'
    },
    textSelected: {
        color: '#01B9FF'
    },
    textUnselected: {
        color: '#fff'
    }
};

export default TabButton;
