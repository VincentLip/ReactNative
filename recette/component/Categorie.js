import {Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Categorie(props) {

    const color = props.item.color



  return (
    <View style={styles.container}>
            <View style ={[styles.categorie,{backgroundColor: color}]}>
                <Text style={styles.recette}>{props.item.title}</Text>
            </View>
        
    </View>
   
  )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : "center",
        alignItems: 'center',

    },
    categorie : {

        borderRadius : 10,
        margin : 10,
        
    },
    recette : {

        fontSize : 30,
        width : 200,
        height : 200,
        textAlign : "center"
        
    }

})