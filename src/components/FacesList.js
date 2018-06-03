import React, { Component } from 'react';
import { Text, FlatList, Clipboard, Share, ToastAndroid } from 'react-native';
import Card from './Card';

import clipboard from '../img/clipboard.png';
import share from '../img/share.png';

class FacesList extends Component {
    
    renderFaces({ item }) {
        const actions = {
            list: [
                {
                    name: 'SHARE',
                    icon: share,
                    key: 'share',
                    value: item.art,
                    callback: ({ value }) => {
                        Share.share(
                            {
                                message: value,
                                url: ''
                            },
                            {
                                dialogTitle: 'Share with your buddies'
                            }
                        );
                    }
                },
                {
                    name: 'COPY',
                    icon: clipboard,
                    key: 'copy',
                    value: item.art,
                    callback: ({ value }) => {
                        Clipboard.setString(value);
                        ToastAndroid.show('Copied!', ToastAndroid.SHORT);
                    }
                }
            ]
        };

        return (
            <Card actions={actions}>
                <Text style={styles.facesStyle}>{item.art}</Text>
            </Card>
        );
    }
    render() {
        return (
            <FlatList
                style={this.props.style}
                data={this.props.faces}
                renderItem={this.renderFaces}
                numColumns={2}
                keyExtractor={item => item.id}
            />
        );
    }
}

const styles = {
    facesStyle: {
        fontSize: 14,
        color: '#444'
    }
};

export default FacesList;
