import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function EntrySummaryList({entriesGrouped}) {
  return (
    <View>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            {item.description}: R${item.amount}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
