/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import Home from './Screens/Home';
import Category from './Screens/Category';
import Search from './Screens/Search';
import Account from './Screens/Account';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const IconSize = 22;

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            switch(route.name) {
              case 'Home':
                iconName = 'home';
                color = focused ? '#0017FF': '#505050';
                break;
              case 'Category':
                iconName = 'layer-group';
                color = focused ? '#0017FF': '#505050';
              break;
              case 'Search':
                iconName = 'search';
                color = focused ? '#0017FF': '#505050';
              break;
              default:
                iconName = 'user';
                color = focused ? '#0017FF': '#505050';
              break;
            }
            return (
              <FontAwesome5 
                name={iconName}
                color={color}
                size={IconSize} 
              />
            )
          }
        })}
        tabBarOption={{
          activeTintColor: '#0017FF',
          inactiveTintColor: '#505050'
        }}
      >
        <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "Trang chủ" }}
        />
        <Tab.Screen
        name="Category"
        component={Category}
        options={{ title: "Phân loại" }}
        />
        <Tab.Screen
        name="Search"
        component={Search}
        options={{ title: "Tìm kiếm" }}
        />
        <Tab.Screen
        name="Account"
        component={Account}
        options={{ title: "Tài khoản" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
