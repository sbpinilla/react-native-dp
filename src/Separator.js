/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class Separator extends Component {
  
  

  render() {
    
    return (
          <View style = { [styles.separator,styles.marginInterno] } />
 
    );
  }
}


// Color variable

const _colorPrimary = "#009688"
const _colorPrimaryDark = "#00796b"
const _colorAccent = "#607d8b"
const _textColorPrimary = "#ffffff"


const styles = StyleSheet.create({
  
  separator:{
    height:1,
    backgroundColor:"#ccc"
  }
  
});
