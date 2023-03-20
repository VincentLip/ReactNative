import { Image,ScrollView,StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS } from '../data/data';

export default function Detail({navigation ,route}) {

    const recette = route.params.recette


    useLayoutEffect(()=> {
      const recetteTitle = MEALS.find(
          (recipe) => recipe.id == recette.id
      ).title;

      navigation.setOptions({
          title : recetteTitle
      })
    },[recette.id,navigation])

  return (
    <ScrollView style={styles.container}>
        <Image source={{uri : recette.imageUrl}} style={styles.image}/>
        <View style={styles.detail}>
          <Text style={styles.title}>{recette.title}</Text>
          <Text style={styles.info}>{recette.duration} min {recette.complexity} {recette.affordability}</Text>
        <View style={styles.design}>
          <Text style={styles.title}>Ingrédients</Text>
          {recette.ingredients.map(i => <Text style={styles.ingredient}>{i}</Text>)}
          <Text style={styles.title}>Steps</Text>
          {recette.steps.map(s => <Text style={styles.steps}>{s}</Text>)}
        </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container :{
      flex:1 ,
    },
    image : {
        width: "100%", 
        height: 300
    },
    detail : {
      alignItems:"center"
    },
    title : {
      fontSize:25,
      color : "black"
    },
    info :{

      fontSize : 15,
        color :"black",
        textAlign : "center",
        textTransform : "uppercase",
        margin : 5   
    },
    ingredient : {
      backgroundColor : "#FF5733",
      color : "black",
      margin : 5,
      borderRadius : 5
    },
    steps : {
      backgroundColor : "#FF5733",
      color : "black",
      margin : 5,
      borderRadius : 5
    },
    design : {

      felx : 1,
      width : "75%",
      alignItems : "center",
      justifyContent : "center"
    },
})