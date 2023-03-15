import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Add from './component/Add';

export default function Home() {

    const [modalVisible,setModalVisible] = useState(false);

    const [tabArticle,setTabArticle] = useState([]);

    function DisplayArticle(){
        setModalVisible(true)
        
    }

    function closeModal(){

        setModalVisible(false)
    }

    function addArticle(article){

    setTabArticle(article)
      console.log(tabArticle)
    }



  return (
    <View style={styles.container}>
      <Button title="Ajouter un article" onPress={DisplayArticle} />
      <Add visible={modalVisible} closeModal={closeModal} addArticle={addArticle}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 20,
        paddingHorizontal:16,
    }
})