import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Add from './component/Add';
import Article from './component/Article';

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

      setTabArticle(articlesCurrent => [
        ...articlesCurrent,
        { text : article , id : Math.random().toString()}
      ])
    setModalVisible(false)
      console.log(tabArticle)
    }

    function deleteArticle(id){

      setTabArticle(tabArticle.filter(c => c.id != id))
      
    }



  return (
    <View style={styles.container}>
      <Button title="Ajouter un article" onPress={DisplayArticle} />
      <Add visible={modalVisible} closeModal={closeModal} addArticle={addArticle}/>
      <FlatList data={tabArticle} renderItem={(itemData) => {
          return (
            <Article text={itemData.item.text} id={itemData.item.id} deleteArticle={deleteArticle}/>
          )
        }} keyExtractor={(item,index) => {
          return item.id
        }}></FlatList>
        
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