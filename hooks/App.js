import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, Button} from 'react-native';

export default function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  function markUser(id) {
    const newUsers = users.map((user) => {
      return user.id === id ? {...user, marked: !user.marked} : user;
    });

    setUsers(newUsers);
  }

  // sempre que ocorrer alguma mudança no array users, o useEffect vai ativar
  useEffect(() => {
    const marked = users.filter((user) => user.marked);
    setCount(marked.length);
  }, [users]);

  useEffect(() => {
    const data = [
      {id: 1, name: 'João'},
      {id: 2, name: 'Maria'},
      {id: 3, name: 'Pedro'},
      {id: 4, name: 'Jorge'},
      {id: 5, name: 'José'},
      {id: 6, name: 'Carlos'},
    ];

    setUsers(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mark}>Total de usuários marcados: {count}</Text>

      <FlatList
        data={users}
        renderItem={({item}) => (
          <View>
            <Text style={styles.text}>
              {item.name}
              {item.marked && <Text style={{color: 'yellow'}}> *** </Text>}
            </Text>

            <Button title="Marcar" onPress={() => markUser(item.id)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#2c3e50',
  },
  text: {
    fontSize: 32,
    color: 'white',
  },
  mark: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
});
