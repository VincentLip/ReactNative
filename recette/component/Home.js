import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES, MEALS } from '../data/data'
import Categorie from './Categorie'

export default function Home({ navigation }) {


  return (
    <FlatList data={CATEGORIES} renderItem={(itemData) => {
        return (
            <Pressable onPress={() => navigation.navigate ("Recette", {idCategory : itemData.item.id})}>
                <Categorie item={itemData.item}/>
            </Pressable>
        )
      }} keyExtractor={(item,index) => {
        return item.id
      }}></FlatList>
  )
  
}



const styles = StyleSheet.create({})