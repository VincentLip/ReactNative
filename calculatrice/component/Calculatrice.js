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
        let resultTmp ="";
        
        value.forEach(element => {
            resultTmp +=element    
        });
        console.log(resultTmp)
        console.log(eval(resultTmp))
        resultTmp = eval(resultTmp)
        setResultat(resultTmp)
        console.log(resultat)
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



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>
      <Text style={styles.result} >{resultat}</Text>
      <View style={styles.firstline}>
        <Pressable onPress={reset}>
            <Text style={styles.button}>C</Text>
        </Pressable>
        <Pressable onPress={add}>
            <Text style={styles.button}>+</Text>
        </Pressable>
        <Pressable onPress={sub}>
            <Text style={styles.button}>-</Text>
        </Pressable>
      </View>
      <View style={styles.firstline}>
        <Pressable onPress={one}>
            <Text style={styles.buttonNum}>1</Text>
        </Pressable>
        <Pressable onPress={two}>
            <Text style={styles.buttonNum} >2</Text>
        </Pressable>
        <Pressable onPress={three}>
            <Text style={styles.buttonNum}>3</Text>
        </Pressable>
        <Pressable onPress={mult}>
            <Text style={styles.button}>*</Text>
        </Pressable>
      </View>
      <View style={styles.firstline}>
        <Pressable onPress={four}>
            <Text style={styles.buttonNum}>4</Text>
        </Pressable>
        <Pressable onPress={five}>
            <Text style={styles.buttonNum}>5</Text>
        </Pressable>
        <Pressable onPress={six}>
            <Text style={styles.buttonNum}>6</Text>
        </Pressable>
        <Pressable onPress={divi}>
            <Text style={styles.button}>/</Text>
        </Pressable>
      </View>
      <View style={styles.firstline}>
        <Pressable onPress={seven}>
            <Text style={styles.buttonNum}>7</Text>
        </Pressable>
        <Pressable onPress={eight}>
            <Text style={styles.buttonNum}>8</Text>
        </Pressable>
        <Pressable onPress={nine}>
            <Text style={styles.buttonNum}>9</Text>
        </Pressable>
        <Pressable onPress={zero}>
            <Text style={styles.buttonNum}>0</Text>
        </Pressable>
      </View>
      <Pressable onPress={result}>
            <Text style={styles.button}>=</Text>
        </Pressable>
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
    }
})