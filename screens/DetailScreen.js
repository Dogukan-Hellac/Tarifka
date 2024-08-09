import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { API_DETAIL_URL } from '@env'
import useFetch from '../hooks/useFetch/useFetch';

export default function DetailScreen({ route }) {
    const { value } = route.params;

    const { loading, data, error } = useFetch(API_DETAIL_URL + value)


    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    if (!data || !data.meals || data.meals.length === 0) {
        return <Text>No data available</Text>;
    }

    const mealData = data.meals[0]
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: mealData.strMealThumb }} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{mealData.strMeal}</Text>
                    <Text style={styles.area}>{mealData.strArea}</Text>
                </View>
                <Text style={styles.desc}>{mealData.strInstructions}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: 300
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        padding: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'darkred'
    },
    area: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkred'
    },
    desc: {
        margin: 5,
    },
    button:{
        backgroundColor:'red',
        padding:10,
        margin:10,
        borderRadius:5,
        alignItems:'center'
    },
    buttonTitle:{
        color:'white'
    }
})