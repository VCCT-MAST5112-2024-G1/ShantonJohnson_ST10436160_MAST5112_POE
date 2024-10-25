import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ChefMenuScreen from './screens/ChefMenuScreen';
import FilterMenuScreen from './screens/FilterMenuScreen';

export interface MenuItem {
  name: string;
  description: string;
  course: string;
  price: number;
}

const Stack = createStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1f1f1f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="ChefMenu">
          {props => <ChefMenuScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Stack.Screen>
        <Stack.Screen name="FilterMenu">
          {props => <FilterMenuScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
