import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';

export default function EntryList({entries}) {
  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>

      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text>
            {item.description}: R$ {item.amount}{' '}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});
