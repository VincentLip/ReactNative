import {Button,FlatList,Image,Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'


export default function Recette({navigation , route}) {

    const idCategory = route.params.idCategory
    const tmpRecette = []
    function Find(id){

        MEALS.forEach(element => {

            console.log(element.categoryIds.filter(e => e == id))
            if(id == element.categoryIds.filter(e => e == id)){
                tmpRecette.push(element)
            }        
        })
        
    }
    Find(idCategory)

    
  return (
    <View>
        <FlatList data={tmpRecette} renderItem={(itemData) => {
        return (
            <Pressable onPress={() => navigation.navigate ("Detail", {recette : itemData.item})}>
                <View style={styles.card}>
                    <Image source={{uri : itemData.item.imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{itemData.item.title}</Text>
                    <Text style={styles.detail}>{itemData.item.duration} min {itemData.item.complexity} {itemData.item.affordability}</Text>
                </View>
            </Pressable>
        )
    }} keyExtractor={(item,index) => {
        return item.id
    }}></FlatList>
    </View>

  )
}

const styles = StyleSheet.create({
    image : {
        width: "100%", 
        height: 300
    },
    card : {
        flex : 1,
        border : "solid",
        borderRadius : 100,
        margin : 10,    
    },
    title : {
        fontSize :30,
        textAlign : "center",
         
    },
    detail : {

        fontSize : 15,
        color :"black",
        textAlign : "center",
        textTransform : "uppercase",
        margin : 5   
    }

})