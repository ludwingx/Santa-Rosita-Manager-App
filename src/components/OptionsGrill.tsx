import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

// Obtener el ancho de la pantalla
const screenWidth = Dimensions.get('window').width;
const isLargeScreen = screenWidth >= 600; // Define un umbral para pantallas grandes

const OptionsGrid = () => {
  return (
    <View style={isLargeScreen ? styles.containerLarge : styles.containerSmall}>
      <View style={styles.option}>
        <Text style={styles.optionText}>Opción 1</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Opción 2</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Opción 3</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Opción 4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSmall: {
    flexDirection: 'column', // En pantallas pequeñas, los botones están en una columna
    padding: 10,
  },
  containerLarge: {
    flexDirection: 'row', // En pantallas grandes, los botones están en una fila
    flexWrap: 'wrap', // Permite que los botones se envuelvan a la siguiente línea si no caben
    justifyContent: 'space-between',
    padding: 10,
  },
  option: {
    width: '100%', // Cada botón ocupa toda la fila en pantallas pequeñas
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OptionsGrid;
