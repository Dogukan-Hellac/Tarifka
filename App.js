import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen';
import { StatusBar } from 'react-native';
import MealsScreen from './screens/MealsScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor: 'orange',
          headerTitleAlign: 'center',
        }}>
          <Stack.Screen name="Categories" component={CategoryScreen} />
          <Stack.Screen name="Meals" component={MealsScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
