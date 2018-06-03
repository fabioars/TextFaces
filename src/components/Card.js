import React, { Component } from 'react';
import { View, Image, Animated } from 'react-native';
import Button from './Button';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animatedValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

    actionCreator = ({ list }) =>
        list.map(({ icon, key, value, callback }) => (
            <Button
                key={key}
                onPress={() => {
                    callback({ key, value });
                }}
                style={styles.actionStyle}
            >
                <Image source={icon} style={styles.actionIconStyle} />
            </Button>
        ));

    cardStyles() {
        return {
            ...styles.containerStyle,
            ...this.props.style,
            ...{
                opacity: this.state.animatedValue,
                transform: [{
                    scale: this.state.animatedValue
                }]
            }
        };
    }

    render() {
        const { children, actions } = this.props;

        return (
            <Animated.View style={this.cardStyles()}>
                <View style={styles.contentContainerStyle}>{children}</View>
                <View style={styles.actionsContainerStyle}>{this.actionCreator(actions)}</View>
            </Animated.View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        elevation: 5,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    contentContainerStyle: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionsContainerStyle: {
        maxHeight: 56,
        flexDirection: 'row'
    },
    actionStyle: {
        height: 56
    },
    actionIconStyle: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    actionTextStyle: {
        color: '#fff'
    }
};

export default Card;
