import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './component/Home';
import Recette from './component/Recette';
import Detail from './component/Detail';


const Stack = createNativeStackNavigator();

export default function App({}) {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Recette" component={Recette}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})