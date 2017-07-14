import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
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

    renderFaces({ name, art }) {
        const actions = { 
            list: [
                { 
                    name: 'SHARE', 
                    icon: share,
                    key: 'share',
                    value: name,
                    callback: ({ key, value }) => {
                        console.log(key, value);
                    }
                },
                { 
                    name: 'COPY', 
                    icon: clipboard,
                    key: 'copy',
                    value: name,
                    callback: ({ key, value }) => {
                        console.log(key, value);
                    }
                }
            ]
        };

        return (
            <Card actions={actions}>
                <Text>{art}</Text>
            </Card>
        );
    }
    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderFaces}
            />
        );
    }
}

export default FacesList;
