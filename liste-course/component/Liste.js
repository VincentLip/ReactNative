import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalInput from './ModalInput'
import Article from './Article'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Liste() {

    const [modalIsVisible,setModalIsVisible] = useState(false) // state pour ma modal
    const [articles,setArticles] = useState([])


    useEffect(() => {
      if(articles.length == 0){
        getArticle()
      }else{
        setArticle()
      }
    },[articles])

    function openModale(){
        console.log("clique sur bouton ajouter article")
        setModalIsVisible(true)
    }

    function closeModale(){
        console.log("clique sur bouton de ma modal pour fermer ma modal")
        setModalIsVisible(false)
    }


    const setArticle = async () => {
      try{
        const jsonArticle = JSON.stringify(articles)
        await AsyncStorage.setItem('articles',jsonArticle)
      }catch(error){
        console.log(error)
      }
    }

    const getArticle = async () => {
      try {
              const jsonArticle = await AsyncStorage.getItem('articles')
              if(jsonArticle != null){
                setArticles(JSON.parse(jsonArticle))
              } 

          }catch(error){
              console.log(error)
          } 
    }

    function addArticle(article){
      // console.log("Ajout d'un articles à ma liste : "+article)
      setArticles(articlesCurrent => [
         ...articlesCurrent,
         { text : article , id : Math.random().toString()}
      ])
      setModalIsVisible(false) // closeModale()
     }


    function deleteArticle(id) {
        console.log("il faut delete l'article avec l'id : "+id)
        setArticles((articlesCurrent) => {
          return articlesCurrent.filter((item) => item.id != id)
        })
    }

  return (
    <View style={styles.container}>
        <Button title='Ajouter Article' onPress={openModale}/>
        <ModalInput visible={modalIsVisible} closeModale={closeModale} addArticle={addArticle}/>
        <FlatList data={articles} renderItem={(itemData) => {
          return (
            <Article text={itemData.item.text} id={itemData.item.id} item={itemData.item} deleteArticle={deleteArticle}/>
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
        paddingHorizontal : 16, 
    }
})