import {Button,Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'


export default function Recette({navigation , route}) {

    const idCategory = route.params.idCategory
    console.log(idCategory)
    function Find(id){

        MEALS.forEach(element => {
            if(id == element.categoryIds){
                console.log(element)        
            }        
        })
        
    }
    Find(idCategory)
  return (
    <View>
        <Button onPress={()=>Find(idCategory)} title='test'></Button>

    </View>
   
  )
}

const styles = StyleSheet.create({})