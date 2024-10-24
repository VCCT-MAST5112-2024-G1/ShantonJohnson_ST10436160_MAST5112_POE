import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, Keyboard, Animated } from 'react-native';
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
  const [name, setName] = useState<string>('');             
  const [description, setDescription] = useState('');        
  const [course, setCourse] = useState<string>('starter');   
  const [price, setPrice] = useState<string>('');            

  // Animation for the Add Dish button
  const [scale] = useState(new Animated.Value(1));

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

      // Custom success alert with a toast-style approach
      Alert.alert('Success', 'Dish added successfully!');
      Keyboard.dismiss();
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Please fill in all fields and ensure the price is a positive number.');
    }
  };

  // Animation on button press
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
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

      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          style={styles.greenButton}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handleAddItem}
        >
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>
      </Animated.View>

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
  inputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
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
    borderRadius: 30, // Rounded corners for a more modern button
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, // Shadow for a raised effect
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
