import React from 'react';
import { View, Text, Platform } from 'react-native';

const Header = ({ title }) => (
    <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
    </View>
);

const styles = {
    containerStyle: {
        minHeight: 56,
        backgroundColor: '#01B9FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        color: '#fff',
        fontWeight: '100',
        fontSize: 22,
        ...Platform.select({
            ios: {
                fontFamily: 'Helvetica-Light',
            },
            android: {
                fontFamily: 'sans-serif-light',
            },
        }),
    }
};

export default Header;
