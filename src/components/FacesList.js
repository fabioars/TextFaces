import React, { Component } from 'react';
import { Text, ListView, Clipboard, Share } from 'react-native';
import Card from './Card';

import clipboard from '../img/clipboard.png';
import share from '../img/share.png';

class FacesList extends Component {
    componentWillMount() {
        this.createDataSource(this.props.faces);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.faces);
    }

    createDataSource(faces) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(faces);
    }

    renderFaces({ art }) {
        const actions = { 
            list: [
                { 
                    name: 'SHARE', 
                    icon: share,
                    key: 'share',
                    value: art,
                    callback: ({ value }) => {
                        Share.share({ message: value, url: '' }, { dialogTitle: 'Share with your buddies' });
                    }
                },
                { 
                    name: 'COPY', 
                    icon: clipboard,
                    key: 'copy',
                    value: art,
                    callback: ({ value }) => {
                        Clipboard.setString(value);
                    }
                }
            ]
        };

        return (
            <Card actions={actions}>
                <Text style={styles.facesStyle}>{art}</Text>
            </Card>
        );
    }
    render() {
        return (
            <ListView
                style={this.props.style}
                dataSource={this.dataSource}
                renderRow={this.renderFaces}
            />
        );
    }
}

const styles = {
    facesStyle: {
        fontSize: 28,
        color: '#444'
    }
};

export default FacesList;
