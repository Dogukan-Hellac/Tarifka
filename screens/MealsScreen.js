import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch/useFetch';
import { API_FILTER_URL } from '@env'
import DetailsCard from '../components/DetailsCard';

export default function MealsScreen({ route, navigation }) {
    const { value } = route.params;

    const { loading, data, error } = useFetch(API_FILTER_URL + value)

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    function handleNavigate(value) {
        navigation.navigate('Detail', { value })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => {
                    return (
                        <DetailsCard
                            title={item.strMeal}
                            uri={item.strMealThumb}
                            onPress={() => handleNavigate(item.idMeal)}
                        />
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    }
})