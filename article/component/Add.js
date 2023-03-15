import { Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


export default function Add(props) {

    const [article,setArticle] = useState('');

    

    function AddArticle(){

        props.addArticle(article)
    }

    return (

    <Modal visible={props.visible}>
        <View>
            {/* <Pressable onPress={props.closeModal} style={({pressed})=> pressed && styles.pressedItem}>
                <Image source={require('./assets/test.png')} style={styles.image} resizeMode='contain'></Image>
            </Pressable> */}
            <TextInput onChangeText={(text) => setArticle(text)}/>
            <Button title="Add" onPress={AddArticle} />
            <Button title="Cancel"  onPress={props.closeModal}/>
            
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    image: {
        width : 100,
    },
    pressedItem:{
        backgroundColor : "red",
    }

})