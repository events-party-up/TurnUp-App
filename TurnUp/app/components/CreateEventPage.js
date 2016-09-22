/**
 * Created by dat on 22/09/2016.
 */

import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../config/styles.js';

export default class CreateEventPage extends Component {
    _handlePress() {
        this.props.navigator.push({id: 2,});
    }

    render() {
        return (
            <View style={[styles.container, {backgroundColor: 'green'}]}>
                <Text style={styles.welcome}>This is CreateEventPage!</Text>
                <TouchableOpacity onPress={() => this._handlePress()}>
                    <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
                        <Text style={styles.welcome}>Go crazy</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
