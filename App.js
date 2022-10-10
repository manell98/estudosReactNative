import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ListarPokemonsComponent from './src/components/ListarPokemons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListarPokemonsComponent />
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
