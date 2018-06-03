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
        minHeight: 44,
        maxHeight: 44 
    },
    containerStyle: {
        backgroundColor: '#30499B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        elevation: 5
    }
};

export default TabBar;
