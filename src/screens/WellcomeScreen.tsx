// src/screens/WellcomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WellcomeScreenNavigationProp } from '../types/navigation';

const WellcomeScreen = () => {
  const navigation = useNavigation<WellcomeScreenNavigationProp>();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      {/* //add img logo */}
      <Image
        source={require('../../assets/images/santaRositaLogo.png')}
      />
      <Button title="Go to Login" onPress={goToLogin} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WellcomeScreen;
