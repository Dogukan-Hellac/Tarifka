import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import CategoriesCard from '../components/CategoriesCard';
import useFetch from '../hooks/useFetch/useFetch';
import { API_CATEGORIES_URL } from '@env'

export default function CategoryScreen({ navigation }) {

    const { loading, data, error } = useFetch(API_CATEGORIES_URL)

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    function handleNavigate(value) {
        navigation.navigate('Meals', { value })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                keyExtractor={(item) => item.idCategory}
                renderItem={({ item }) => {
                    return (
                        <CategoriesCard
                            title={item.strCategory}
                            uri={item.strCategoryThumb}
                            onPress={() => handleNavigate(item.strCategory)}
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
    },
})