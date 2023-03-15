import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function calculatrice() {

    const [value,setValue] = useState([])
    const [resultat,setResultat] = useState()


    function reset(){

        setResultat("")
        setValue("")
        console.log("test")
    }

    function result(){
        
        if(value == []){

            setResultat("0")
        }else{
            let resultTmp ="";
            
            value.forEach(element => {
                resultTmp +=element    
            });
            console.log(resultTmp)
            console.log(eval(resultTmp))
            resultTmp = eval(resultTmp)
            setResultat(resultTmp.toFixed(2))
            console.log(resultat)
        }
    }

    function zero(){  
        setValue(valueCurrent => [...valueCurrent,"0"])   
    
    }

    function one(){  
        setValue(valueCurrent => [...valueCurrent,"1"])   
    
    }

    function two(){  
        setValue(valueCurrent => [...valueCurrent,"2"])   
    
    }
    function three(){  
        setValue(valueCurrent => [...valueCurrent,"3"])   
    
    }
    function four(){  
        setValue(valueCurrent => [...valueCurrent,"4"])   
    
    }
    function five(){  
        setValue(valueCurrent => [...valueCurrent,"5"])   
    
    }
    function six(){  
        setValue(valueCurrent => [...valueCurrent,"6"])   
    
    }
    function seven(){  
        setValue(valueCurrent => [...valueCurrent,"7"])   
    
    }
    function eight(){  
        setValue(valueCurrent => [...valueCurrent,"8"])   
    
    }
    function nine(){  
        setValue(valueCurrent => [...valueCurrent,"9"])   
    
    }

    function add(){
        setValue(valueCurrent => [...valueCurrent,"+"]) 
    }

    function sub(){
        setValue(valueCurrent => [...valueCurrent,"-"]) 
    }

    function mult(){
        setValue(valueCurrent => [...valueCurrent,"*"]) 
    }

    function divi(){
        setValue(valueCurrent => [...valueCurrent,"/"]) 
    }

    function point(){
        setValue(valueCurrent => [...valueCurrent,"."]) 
    }

    function left(){
        setValue(valueCurrent => [...valueCurrent,"("]) 
    }

    function right(){
        setValue(valueCurrent => [...valueCurrent,")"]) 
    }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>
      <Text style={styles.result} >{resultat}</Text>
      <View style={styles.firstline}>
        <Pressable onPress={reset} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.button}>C</Text>
        </Pressable>
        <Pressable onPress={add} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.button}>+</Text>
        </Pressable>
        <Pressable onPress={sub} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.button}>-</Text>
        </Pressable>
        <Pressable onPress={point} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.button}>.</Text>
        </Pressable>
      </View>
      <View style={styles.firstline}>
        <Pressable onPress={one} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>1</Text>
        </Pressable>
        <Pressable onPress={two} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum} >2</Text>
        </Pressable>
        <Pressable onPress={three} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>3</Text>
        </Pressable>
        <Pressable onPress={mult} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.button}>*</Text>
        </Pressable>
      </View>
      <View style={styles.firstline}>
        <Pressable onPress={four} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>4</Text>
        </Pressable>
        <Pressable onPress={five} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>5</Text>
        </Pressable>
        <Pressable onPress={six} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>6</Text>
        </Pressable>
        <Pressable onPress={divi} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.button}>/</Text>
        </Pressable>
      </View>
      <View style={styles.firstline}>
        <Pressable onPress={seven} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>7</Text>
        </Pressable>
        <Pressable onPress={eight} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>8</Text>
        </Pressable>
        <Pressable onPress={nine} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>9</Text>
        </Pressable>
        <Pressable onPress={zero} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonNum}>0</Text>
        </Pressable>
      </View>
      <View style={styles.firstline}>
      <Pressable onPress={result} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.buttonResult}>=</Text>
        </Pressable>
        <Pressable onPress={left} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.button}>(</Text>
        </Pressable>
        <Pressable onPress={right} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.button}>)</Text>
        </Pressable>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstline: {
        flexDirection : "row"
        
    },
    button: {
        backgroundColor : "black",
        color : "white",
        borderRadius : 10,
        width:50,
        height:50,
        textAlign : "center",
        fontSize : 40,
        margin : 5,
    },
    buttonNum: {
        backgroundColor : "green",
        color : "white",
        borderRadius : 10,
        width:50,
        height:50,
        textAlign : "center",
        fontSize : 40,
        margin : 5,
    },
    result : {
        fontSize : 100
    },
    title : {

        fontSize : 60
    },
    pressedItem : {
        borderRadius : 10,
        backgroundColor : 'red',
    },
    buttonResult : {
        backgroundColor : "black",
        color : "white",
        borderRadius : 10,
        width: 110,
        height:50,
        textAlign : "center",
        fontSize : 40,
        margin : 5,


    }
})