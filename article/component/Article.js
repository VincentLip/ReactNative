import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Article(props) {

    function deleteArticle(){

        props.deleteArticle(props.id)
    }

    return (
    <View style={styles.articleItem}>
        <Pressable onPress={deleteArticle} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.articleText}>
                {props.text}
            </Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
  articleItem :{
      margin : 8,
      padding : 8,
      borderRadius : 6,
      backgroundColor : '#5e0acc',
  },
  articleText : {
    color : "white",
    },
  pressedItem : {
    borderRadius : 6,
    backgroundColor : 'red',
    },
})