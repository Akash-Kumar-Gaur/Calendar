import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyCalendar from './src/components/Calendar';

export default function App() {
  return (
    <View style={styles.container}>
      <MyCalendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
