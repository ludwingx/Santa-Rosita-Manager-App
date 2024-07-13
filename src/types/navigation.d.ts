// src/types/navigation.d.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Wellcome: undefined;
  Login: undefined;
  Navigation: undefined;
};

export type WellcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Wellcome'
>;

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type NavigationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Navigation'
>;
