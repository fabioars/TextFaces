import React from 'react';
import { View, Image, Text } from 'react-native';
import Button from './Button';

const Action = ({ list }) => (
    list.map(({ name, icon, key, value, callback }) => (
        <Button key={key} onPress={() => { callback({ key, value }); }} style={styles.actionStyle}>
            <Image source={icon} style={styles.actionIconStyle} />
            <Text style={styles.actionTextStyle}>{name}</Text>
        </Button>
    ))
);

const Card = ({ style, children, actions }) => (
    <View style={[styles.containerStyle, style]}>
        <View style={styles.contentContainerStyle}>
            {children}
        </View>
        <View style={styles.actionsContainerStyle}>
            {Action(actions || { list: [] })}
        </View>
    </View>
);

const styles = {
    containerStyle: {
        elevation: 5,
        backgroundColor: '#fff',
        margin: 10
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
