import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Detail({navigation ,route}) {

    const recette = route.params.recette
  return (
    <View style={styles.container}>
        <Image source={{uri : recette.imageUrl}} style={styles.image}/>
        <View>
          <Text>{recette.title}</Text>
          <Text>{recette.affordability}</Text>
          <Text>{recette.complexity}</Text>
          <Text>{recette.duration}</Text>
          <Text>{recette.ingredients}</Text>
          <Text>{recette.steps}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{

      flex : 1
    },
    image : {
        width: "100%", 
        height: 300
    },
})