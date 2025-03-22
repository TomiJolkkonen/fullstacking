// App.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Counter from './components/Counter';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Laskuri</Text>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
