import React, { Component } from 'react';
import { connect } from 'react-redux';
// Elements
import {
  View, Text, Button
} from 'react-native';
import styles from '../styles/SymptomLogStyle';
// Actions
import { 
  ON_DETAIL,
 } from '../reducers/nav/actionTypes'
// Strings
import { HeaderSymptomLog } from '../constants/string';

class SymptomLogScreen extends Component{
  static navigationOptions = {
    title: HeaderSymptomLog,
  };

  constructor(props){
    super(props)
  }
  
  // Functions

  // LifeCycle
  render(){
    return(
      <View style={styles.container}>
        <Text>This is SymptomLog</Text>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    
  })
)(SymptomLogScreen);