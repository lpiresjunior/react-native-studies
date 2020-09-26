import React, {useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: count,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleSendButton = () => {
    navigation.setOptions({
      title: name,
    });

    // navigation.navigate('About', {name: name});
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text>Qual seu nome?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Button title="Enviar" onPress={handleSendButton} />

      <Button
        title="BG Vermelho"
        onPress={() =>
          navigation.setOptions({
            headerStyle: {
              backgroundColor: '#FF0000',
            },
          })
        }
      />

      <Button
        title="BG Azul"
        onPress={() =>
          navigation.setOptions({
            headerStyle: {
              backgroundColor: '#0000FF',
            },
          })
        }
      />

      <Button title="+1" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#DDD',
  },
});

export default HomeScreen;
