import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MenuItem } from '../App';
import { Picker } from '@react-native-picker/picker';

interface FilterMenuScreenProps {
  menuItems: MenuItem[];
}

export default function FilterMenuScreen({ menuItems }: FilterMenuScreenProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>('starter');

  const filteredItems = menuItems.filter(item => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>

      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>

      <ScrollView style={styles.scrollView}>
        {filteredItems.map((item, index) => (
          <View key={index} style={styles.menuItemCard}>
            <Text style={styles.menuItemTitle}>{item.name}</Text>
            <Text style={styles.menuItemDetails}>Course: {item.course}</Text>
            <Text style={styles.menuItemPrice}>R{item.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    marginBottom: 20,
  },
  scrollView: {
    marginVertical: 10,
  },
  menuItemCard: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuItemDetails: {
    fontSize: 14,
    color: '#ccc',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ff00',
  },
});
