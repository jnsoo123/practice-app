import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import {
  Button,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
  List,
  ListItem,
  Modal,
} from 'react-native-ui-kitten';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  onLeftControlPress(e) {
  }

  renderLeftControlIcon() {
    return(
      <Icon name='twitter-outline' width={24} height={24} />
    )
  }

  renderRightControlIcon() {
    return(
      <Icon name='plus-outline' width={24} height={24} />
    )
  }

  renderLeftControl() {
    return(
      <TopNavigationAction
        icon={this.renderLeftControlIcon}
        onPress={this.onLeftControlPress} />
    )
  }

  renderRightControl() {
    return(
      <View>
        <TopNavigationAction
          icon={this.renderRightControlIcon}
          onPress={() => this.props.navigation.navigate('AddKeyword')} />
      </View>
    )
  }

  renderListAccessory(count) {
    return(
      <Layout style={styles.listAccessoryContainer}>
        <Text style={styles.listAccessory}>{count}</Text>
      </Layout>
    )
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Layout style={styles.container}>
          <TopNavigation
            title='Scraper'
            subtitle='Scrapes from Twitter'
            leftControl={this.renderLeftControl()}
            rightControls={this.renderRightControl()}
            alignment='center' />
          <ListItem
            title='Keyword 1'
            accessory={this.renderListAccessory.bind(this, 37)}
            description='Created on July 30, 2019 12:41 PM' />
          <ListItem
            title='Keyword 2'
            accessory={this.renderListAccessory.bind(this, 51)}
            description='Created on August 3, 2019 9:58 AM' />
        </Layout>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
  },
  text: {
    marginVertical: 16,
  },
  listAccessoryContainer: {
    alignItems: 'center',
    width: 24,
    backgroundColor: '#ff0068',
    borderRadius: 5,
  },
  listAccessory: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    alignItems: 'center',
  }
});
