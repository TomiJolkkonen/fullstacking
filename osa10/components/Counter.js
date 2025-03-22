// components/Counter.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>Laskuri: {count}</Text>
      <Button title="Lisää" onPress={() => setCount(count + 1)} />
      <Button title="Vähennä" onPress={() => setCount(count - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Counter;
