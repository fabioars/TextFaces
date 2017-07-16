import React from 'react';
import { View, ScrollView } from 'react-native';

const TabBar = (props) => (
    <ScrollView 
        style={styles.scrollStyle} 
        horizontal 
        showsHorizontalScrollIndicator={false}
    >
        <View style={styles.containerStyle}>
            {props.children}
        </View>
     </ScrollView> 
);

const styles = {
    scrollStyle: {
        minHeight: 64,
        maxHeight: 64 
    },
    containerStyle: {
        // backgroundColor: '#01B9FF',
        backgroundColor: '#01B9FF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: null
    }
};

export default TabBar;