import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddMenuItemScreen from './screens/AddMenuItemScreen';

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
      <Text style={styles.title}>Christoffels Menu</Text>

      {/* Display the number of items entered */}
      <Text style={styles.subtitle}>Items entered: {menuItems.length}</Text>

      {/* ScrollView to display the list of entered items */}
      <ScrollView style={styles.scrollView}>
        {menuItems.length === 0 ? (
          // If no items have been added, show this message
          <View style={styles.emptyContainer}>
            <Image
              source={{ uri: 'https://image.shutterstock.com/image-vector/restaurant-menu-concept-design-flat-260nw-1411504896.jpg' }}
              style={styles.emptyImage}
            />
            <Text style={styles.emptyText}>No items added yet. Start by adding your first dish!</Text>
          </View>
        ) : (
          // Map through the menuItems array and display each item
          menuItems.map((item, index) => (
            <View key={index} style={styles.menuItemCard}>
              <Text style={styles.menuItemTitle}>{item.name}</Text>
              <Text style={styles.menuItemDescription}>{item.description}</Text>
              <Text style={styles.menuItemDetails}>Course: {item.course}</Text>
              <Text style={styles.menuItemPrice}>R{item.price.toFixed(2)}</Text>
            </View>
          ))
        )}
      </ScrollView>

      {/* Button to navigate to the AddMenuItemScreen */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMenuItem', { menuItems, setMenuItems })}
      >
        <Text style={styles.addButtonText}>Add Menu Item</Text>
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
          cardStyleInterpolator: ({ current, next, layouts }) => ({
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
            overlayStyle: {
              opacity: current.progress,
            },
          }),
        }}
      >
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
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  scrollView: {
    marginTop: 20,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    maxHeight: 400,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    color: '#888',
    fontSize: 16,
  },
  menuItemCard: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  menuItemTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#ccc',
    marginVertical: 5,
  },
  menuItemDetails: {
    fontSize: 14,
    color: '#bbb',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
