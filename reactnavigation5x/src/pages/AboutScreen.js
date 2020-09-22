import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Button title="Voltar" onPress={handleBackButton} />
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

export default AboutScreen;
