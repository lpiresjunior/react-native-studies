import React from 'react';
import {Text, Dimensions, StyleSheet, TouchableHighlight} from 'react-native';

export default function Button(props) {
  return (
    <TouchableHighlight onPress={props.onclick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4 - 14,
    width: Dimensions.get('window').width / 4 - 14,
    backgroundColor: '#E9F0F4',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 7,
    borderRadius: 20,
  },
});
