import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface HeaderProps {
  userName: string;
  profilePicture: string;
  onNotificationsPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, profilePicture, onNotificationsPress }) => {
  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Buenos días 👋';
    } else if (hour < 18) {
      return 'Buenas tardes 👋';
    } else {
      return 'Buenas noches 👋';
    }
  };

  // Obtener el ancho de la pantalla
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.header}>
      <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>{getGreeting()},</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <TouchableOpacity onPress={onNotificationsPress} style={styles.notificationButton}>
        <Icon name="bell" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'web' && Dimensions.get('window').width >= 768 ? 10 : 35, // Adjust padding for web
    paddingLeft: 15,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    color: '#333',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationButton: {
    padding: 10,
  },
});

export default Header;
