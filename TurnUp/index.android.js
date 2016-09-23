'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import LoginPage from './app/components/LoginPage.js';
import CreateEventPage from './app/components/CreateEventPage.js';
import ExplorePage from './app/components/ExplorePage.js';
import SummaryPreviewPage from './app/components/SummaryPreview.js';
import SummaryPage from './app/components/Summary.js';
import HostPage from './app/components/HostPage.js';
import TabsPage from './app/components/TabsPage.js';

class LastPage extends Component {
  _handleBack() {
    this.props.navigator.pop();
  }

  _handleToFirst() {
    this.props.navigator.popToRoute(this.props.navigator.getCurrentRoutes()[0])
  }

  render() {
    return (
        <View style={[styles.container,
          {
            backgroundColor: 'green',
            justifyContent: 'center'
          },
          ]}>
          <Text style={[styles.welcome]}>Last page bro!</Text>
          <View style={[styles.container, {flex: 0, flexDirection: 'row', backgroundColor: 'transparent'}]}>
            <TouchableOpacity onPress={() => this._handleBack()} style={{margin: 5}}>
              <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
                <Text style={styles.welcome}>Go back</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._handleToFirst()} style={{margin: 5}}>
              <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
                <Text style={styles.welcome}>Go to first</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}

class TurnUp extends Component {
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <LoginPage navigator={navigator} />
    } else if (route.id === 2) {
      return <TabsPage navigator={navigator} />
    } else if (route.id === 3) {
      return <ExplorePage navigator={navigator} />
    } else if (route.id === 4) {
      return <SummaryPreviewPage navigator={navigator} />
    } else if (route.id === 5) {
      return <SummaryPage navigator={navigator} />
    } else if (route.id < 7) {
      return <HostPage navigator={navigator} pageNumber={route.id}/>
    } else {
      return <LastPage navigator={navigator} />
    }
  }

  _configureScene() {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 2, }}
        renderScene={this._renderScene}
        configureScene={this._configureScene} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});

AppRegistry.registerComponent('TurnUp', () => TurnUp);