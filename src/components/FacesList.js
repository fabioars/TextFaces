import React, { Component } from 'react';
import { ScrollView, Text, ListView } from 'react-native';
import Card from './Card';

import clipboard from '../img/clipboard.png';
import share from '../img/share.png';

class FacesList extends Component {
    constructor(props) {
        super(props);
        
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }
    actionHandler({ key, value }) {
        console.log(key, value);
    }
    renderFaces({ name, art }) {
        // const actions = { 
        //     list: [
        //         { 
        //             name: 'SHARE', 
        //             icon: share,
        //             key: 'share',
        //             value: name,
        //             callback: this.actionHandler.bind(this)
        //         },
        //         { 
        //             name: 'COPY', 
        //             icon: clipboard,
        //             key: 'copy',
        //             value: name,
        //             callback: this.actionHandler.bind(this)
        //         }
        //     ]
        // };
        // return (
        //     <Card actions={actions}>
        //         <Text>{art}</Text>
        //     </Card>
        // );
        return (<Text> Something </Text>);
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
}

export default FacesList;
