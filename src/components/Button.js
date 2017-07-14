import React from 'react';
import { TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.containerStyle, style]}>
        {children}
    </TouchableOpacity>
);

const styles = {
    containerStyle: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#D667CD',
        flex: 1
    }
};

export default Button;
