import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

const Button = ({ onPress, children, style }) => (
    <TouchableNativeFeedback 
        onPress={onPress} 
        style={[styles.containerStyle, style]}
        background={TouchableNativeFeedback.SelectableBackground()}
    >
        <View style={styles.containerStyle}>
            {children}
        </View>
        
    </TouchableNativeFeedback>
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
