import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: count,
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [count]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Adicionar" onPress={handleHeaderPlus} />
      ),
    });
  });

  const handleHeaderPlus = () => {
    setIngredients([...ingredients, name]);
    setName('');
  };

  const handleSendButton = () => {
    navigation.setOptions({
      title: name,
    });

    // navigation.navigate('About', {name: name});
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça um Bolo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um ingrediente"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <FlatList
        data={ingredients}
        renderItem={({item}) => <Text style={styles.itemList}>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 18,
    backgroundColor: '#FFF',
  },
  itemList: {
    color: '#FFF',
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
});

export default HomeScreen;
