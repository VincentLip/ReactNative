import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native'
import { MEALS } from '../data/data';
import MealDetails from '../components/MealDetails';
import List from '../components/List';
import Subtitle from '../components/Subtitle';
import { useDispatch,useSelector } from 'react-redux';
import { addFavory} from '../store/favory';


export default function MealsDetailScreen({ navigation, route }) {
    const mealId = route.params.mealId;
    const myMeal = MEALS.find((meal) => meal.id == mealId)
    const favory = useSelector((state)=> state.favory.favory)
    const dispatch  = useDispatch()
    

    console.log(favory)

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: myMeal.imageUrl }} />
            <Text style={styles.title}>{myMeal.title}</Text>
            <Button title="Favorie" onPress={() => dispatch(addFavory(myMeal.id))}></Button>
            <MealDetails
                duration={myMeal.duration}
                complexity={myMeal.complexity}
                affordability={myMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                   <List data={myMeal.ingredients} /> 
                    <Subtitle>Steps</Subtitle>
                     <List data={myMeal.steps} /> 
                </View>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'black',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
})