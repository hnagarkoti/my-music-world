import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

class Launch extends Component {
  render(){
        return (
          <View style={styles.container}>
            <Text>Launch page</Text>
          </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

module.exports = Launch;


// <View style={styles.container}>
//     <Text>Launch page</Text>
//     <Button onPress={()=>Actions.login({data:"Custom data", title:'Custom title' })}>Go to Login page</Button>
//     <Button onPress={Actions.register}>Go to Register page</Button>
//     <Button onPress={Actions.register2}>Go to Register page without animation</Button>
//     <Button onPress={Actions.error('error message')}>Show error popup</Button>
//     <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
// </View>
