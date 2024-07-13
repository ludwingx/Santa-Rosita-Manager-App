// src/navigation/Navigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';

import HomeScreen from '../screens/HomeScreen';
import InventoryScreen from '../screens/InventoryScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SellScreen from '../screens/SellScreen';

const Tab = createBottomTabNavigator();

const screens = [
  { name: 'Inicio', component: HomeScreen, iconName: 'house' },
  { name: 'Inventario', component: InventoryScreen, iconName: 'capsules' },
  { name: 'Vender', component: SellScreen, iconName: 'cart-arrow-down' },
  { name: 'Pedidos', component: OrdersScreen, iconName: 'bag-shopping' },
  { name: 'Perfil', component: ProfileScreen, iconName: 'user' },
];

const Navigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => {
      const screen = screens.find(screen => screen.name === route.name);
      const iconName = screen ? screen.iconName : '';

      return {
        tabBarIcon: ({ color, size }) => {
          const iconSize = size * 1.1 ;
          return <Icon name={iconName} color={color} size={iconSize} />;
        },
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#bdc3c7',
        tabBarStyle: {
          paddingTop: 15,
          paddingBottom: 15,
          height: 75,
        },
        headerShown: false, // Ocultar el nombre en la cabecera
      };
    }}
  >
    {screens.map(screen => (
      <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
      />
    ))}
  </Tab.Navigator>
);

export default Navigation;
