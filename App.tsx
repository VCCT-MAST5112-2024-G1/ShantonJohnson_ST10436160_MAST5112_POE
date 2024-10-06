import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddMenuItemScreen from './screens/AddMenuItemScreen';  // Import the new AddMenuItemScreen component

// Define the structure of a menu item
interface MenuItem {
  name: string;         // Name of the dish
  description: string;  // Description of the dish
  course: string;       // Course type (starter, main, dessert)
  price: number;        // Price of the dish
}

// Create a Stack Navigator for screen navigation
const Stack = createStackNavigator();

// HomeScreen component to display the list of menu items
function HomeScreen({ navigation }: { navigation: any }) {
  // State to hold the list of menu items
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <View style={styles.container}>
      {/* Display app title */}
      <Text style={styles.title}>Christoffels Menu App</Text>

      {/* Display the number of items entered */}
      <Text style={styles.text}>Items entered: {menuItems.length}</Text>

      {/* ScrollView to display the list of entered items */}
      <ScrollView style={styles.scrollView}>
        {menuItems.length === 0 ? (
          // If no items have been added, show this message
          <Text style={styles.text}>No items added yet.</Text>
        ) : (
          // Map through the menuItems array and display each item
          menuItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>Dish: {item.name}</Text>
              <Text style={styles.menuText}>Description: {item.description}</Text>
              <Text style={styles.menuText}>Course: {item.course}</Text>
              <Text style={styles.menuText}>Price: R{item.price.toFixed(2)}</Text>
            </View>
          ))
        )}
      </ScrollView>

      {/* Button to navigate to the AddMenuItemScreen */}
      <TouchableOpacity
        style={styles.greenButton}
        onPress={() => navigation.navigate('AddMenuItem', { menuItems, setMenuItems })}
      >
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      {/* Configure the status bar style */}
      <StatusBar style="light" />
    </View>
  );
}

// Main App component that handles the navigation between screens
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Define the HomeScreen as the first screen */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu' }} />

        {/* Define the AddMenuItemScreen */}
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} options={{ title: 'Add Menu Item' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  text: {
    color: 'white',
  },
  scrollView: {
    marginTop: 20,
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    maxHeight: 500,
  },
  menuItem: {
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  menuText: {
    fontSize: 16,
    color: 'white',
  },
  greenButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
