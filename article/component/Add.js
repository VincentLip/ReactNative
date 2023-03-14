import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


export default function Add(props) {

    const [article,setArticle] = useState();
    

    function AddArticle(){

            console.log(article)
    }

    return (

    <Modal visible={props.visible}>
        <View>
            <TextInput onChangeText={(text) => setArticle(text)}/>
            <Button title="Add" onPress={AddArticle} />
            <Button title="Cancel"  onPress={props.closeModal}/>
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({})