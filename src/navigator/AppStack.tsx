import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';

// Define type for your stack's parameter list
export type AppStackParamList = {
  Bottom: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Bottom"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bottom" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
