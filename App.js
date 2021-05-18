import React from 'react';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';
import DeadInventors from './src/components/deadInventors'
 
export default function App() {
  return (
    <SafeAreaView>
      <DeadInventors />
    </SafeAreaView>
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
