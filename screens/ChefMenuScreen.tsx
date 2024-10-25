import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker component
import { MenuItem } from '../App';

interface ChefMenuScreenProps {
  navigation: any;
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export default function ChefMenuScreen({ menuItems, setMenuItems }: ChefMenuScreenProps) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<string>('starter');
  const [price, setPrice] = useState<string>('');

  const handleAddItem = () => {
    if (name.trim() && description.trim() && course && !isNaN(Number(price)) && Number(price) > 0) {
      const newItem: MenuItem = {
        name,
        description,
        course,
        price: parseFloat(price),
      };
      setMenuItems([...menuItems, newItem]);
      setName('');
      setDescription('');
      setCourse('starter');
      setPrice('');
      Alert.alert('Success', 'Dish added successfully!');
    } else {
      Alert.alert('Error', 'Please fill in all fields and ensure the price is a positive number.');
    }
  };

  const handleRemoveItem = (index: number) => {
    setMenuItems(menuItems.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter dish name"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        placeholderTextColor="#888"
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
          dropdownIconColor="#fff" // Change this to match your design
        >
          <Picker.Item label="Starter" value="starter" />
          <Picker.Item label="Main" value="main" />
          <Picker.Item label="Dessert" value="dessert" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        placeholder="Enter price"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.menuItemCard}>
            <Text style={styles.menuItemTitle}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(index)}>
              <Text style={styles.deleteButton}>Remove</Text>
            </TouchableOpacity>
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
  input: {
    height: 50,
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    marginVertical: 20,
  },
  menuItemCard: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemTitle: {
    fontSize: 18,
    color: '#fff',
  },
  deleteButton: {
    color: '#ff6347',
    fontSize: 16,
  },
});
