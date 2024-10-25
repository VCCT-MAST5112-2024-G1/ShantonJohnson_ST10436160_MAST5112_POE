import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MenuItem } from '../App';
import { calculateAveragePrice } from '../utils';

interface HomeScreenProps {
  navigation: any;
  menuItems: MenuItem[];
}

export default function HomeScreen({ navigation, menuItems }: HomeScreenProps) {
  const avgStarterPrice = calculateAveragePrice(menuItems, 'starter');
  const avgMainPrice = calculateAveragePrice(menuItems, 'main');
  const avgDessertPrice = calculateAveragePrice(menuItems, 'dessert');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffels Menu</Text>

      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceText}>Starters Avg Price: R{avgStarterPrice.toFixed(2)}</Text>
        <Text style={styles.averagePriceText}>Mains Avg Price: R{avgMainPrice.toFixed(2)}</Text>
        <Text style={styles.averagePriceText}>Desserts Avg Price: R{avgDessertPrice.toFixed(2)}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.menuItemCard}>
            <Text style={styles.menuItemTitle}>{item.name}</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
            <Text style={styles.menuItemDetails}>Course: {item.course}</Text>
            <Text style={styles.menuItemPrice}>R{item.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ChefMenu')}
      >
        <Text style={styles.buttonText}>Go to Chef's Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FilterMenu')}
      >
        <Text style={styles.buttonText}>Filter Menu Items</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // White color for the title
  },
  averagePriceContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    width: '90%',
    backgroundColor: '#333', // Dark background for average price container
    borderRadius: 8, // Rounded corners
  },
  averagePriceText: {
    fontSize: 16,
    color: '#ccc', // Light gray for average price text
    marginBottom: 5,
  },
  scrollView: {
    margin: 20,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    maxHeight: 400,
  },
  menuItemCard: {
    backgroundColor: '#1e1e1e', // Dark background for menu items
    padding: 15,
    marginBottom: 10,
    borderRadius: 10, // Rounded corners for menu item cards
    borderColor: 'white',
    borderWidth: 1,
  },
  menuItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // White color for menu item title
    marginBottom: 5,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#bbb', // Light gray for menu item description
    marginBottom: 5,
  },
  menuItemDetails: {
    fontSize: 14,
    color: '#888', // Darker gray for menu item details
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ff00', // Bright green for price
    marginTop: 5,
  },
  button: {
    backgroundColor: '#28a745', // Green color for buttons
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white', // White color for button text
    fontSize: 18,
    fontWeight: 'bold',
  },
});
