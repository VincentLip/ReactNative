import {Button,FlatList,Image,Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'


export default function Recette({navigation , route}) {

    const idCategory = route.params.idCategory
    const tmpRecette = []
    console.log(idCategory)
    function Find(id){

        MEALS.forEach(element => {
            if(id == element.categoryIds){
                tmpRecette.push(element)
                console.log(tmpRecette)        
            }        
        })
        
    }
    Find(idCategory)

    
  return (
    <View>
        <Button onPress={()=>Find(idCategory)} title='test'></Button>
        <FlatList data={tmpRecette} renderItem={(itemData) => {
        return (
            <View>
                <Image source={itemData.item.imageUrl} style={styles.image} resizeMode='contain' />
                <Text>{itemData.item.title}</Text>
                <Text>{itemData.item.duration} {itemData.item.complexity} {itemData.item.affordability}</Text>
            </View>
        )
      }} keyExtractor={(item,index) => {
        return item.id
      }}></FlatList>
    </View>
   
  )
}

const styles = StyleSheet.create({})