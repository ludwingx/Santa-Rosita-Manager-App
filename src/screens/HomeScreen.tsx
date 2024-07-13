import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';
import OptionsGrid from '../components/OptionsGrill';

export default function HomeScreen() {
  const handleNotificationsPress = () => {
    Alert.alert('Notificaciones', 'Aquí irían las notificaciones.');
  };

  const handleOptionPress = (option: string) => {
    Alert.alert('Opción seleccionada', `Seleccionaste ${option}`);
  };

  const options = [
    { label: 'Opción 1', onPress: () => handleOptionPress('Opción 1') },
    { label: 'Opción 2', onPress: () => handleOptionPress('Opción 2') },
    { label: 'Opción 3', onPress: () => handleOptionPress('Opción 3') },
    { label: 'Opción 4', onPress: () => handleOptionPress('Opción 4') },
  ];

  return (
    <View style={styles.container}>
      <Header
        userName={'Ludwing'}
        profilePicture={'https://www.sealcorp.com/wp-content/uploads/Hoss.jpg'}
        onNotificationsPress={handleNotificationsPress}
      />
      <View style={styles.content}>
        <OptionsGrid />
        {/* Agrega otros componentes aquí */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
