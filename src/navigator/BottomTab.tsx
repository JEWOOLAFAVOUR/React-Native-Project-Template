import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import HomeScreen from '../screen/main/home/HomeScreen';

const {width, height} = Dimensions.get('window');

type TabParamList = {
  Home: undefined;
  Message: undefined;
  Notification: undefined;
  Game: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        tabBarStyle: {
          height: SIZES.h1 * 1.9,
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
        },
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              fontSize: SIZES.body5,
              color: focused ? COLORS.secondary : COLORS.black,
              marginBottom: 5,
            }}>
            {route.name}
          </Text>
        ),
        tabBarIcon: ({focused, size, color}) => {
          let iconName: ImageSourcePropType = icons.home;

          switch (route.name) {
            case 'Home':
              iconName = icons.home;
              break;
            case 'Message':
              iconName = icons.message;
              break;
            case 'Notification':
              iconName = icons.notification;
              break;
            case 'Game':
              iconName = icons.game;
              break;
            case 'More':
              iconName = icons.more;
              break;
          }

          const tintColor = focused ? COLORS.secondary : COLORS.black;

          return (
            <Image
              source={iconName}
              style={{height: SIZES.h3, width: SIZES.h3, tintColor}}
              resizeMode="contain"
            />
          );
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
