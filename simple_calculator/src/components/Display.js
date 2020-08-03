import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Display(props) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValues}>2 x ( 2 + 9) + 1000</Text>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: '#F6F8F9',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
  },
  displayValue: {
    fontSize: 60,
    color: '#17181A',
    marginRight: 20,
  },
  displayValues: {
    fontSize: 16,
    color: '#18E6C1',
    marginRight: 20,
    fontWeight: 'bold',
  },
});
