import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';

interface MenuItem {
  name: string;
  description: string;
  course: string;
  price: number;
}

export default function AddMenuItemScreen({ route, navigation }: { route: any; navigation: any }) {
  const { menuItems, setMenuItems } = route.params;

  // States for handling form input values
  const [name, setName] = useState<string>('');             // Dish name
  const [description, setDescription] = useState('');        // Dish description
  const [course, setCourse] = useState<string>('starter');   // Dish course, defaults to 'starter'
  const [price, setPrice] = useState<string>('');            // Dish price as a string for input handling

  // Function to handle adding a new item
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
      Keyboard.dismiss();
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Please fill in all fields and ensure the price is a positive number.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Dish</Text>

      <View style={styles.inputContainer}>
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
            dropdownIconColor="white"
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
      </View>

      <TouchableOpacity style={styles.greenButton} onPress={handleAddItem}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

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
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#333',
    color: 'white',
  },
  inputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  pickerContainer: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#333',
    marginBottom: 10,
  },
  picker: {
    height: 40,
    width: '100%',
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
