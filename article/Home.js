import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Add from './component/Add';

export default function Home() {

    const [modalVisible,setModalVisible] = useState(false);

    function DisplayArticle(){
        setModalVisible(true)
        
    }

    function closeModal(){

        setModalVisible(false)
    }


  return (
    <View>
      <Button title="Ajouter un article" onPress={DisplayArticle}/>
      <Add visible={modalVisible} closeModal={closeModal} />
      
    </View>
  )
}

const styles = StyleSheet.create({})