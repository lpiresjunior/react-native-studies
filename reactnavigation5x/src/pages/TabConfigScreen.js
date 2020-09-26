import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TabConfigScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TAB CONFIG</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabConfigScreen;
