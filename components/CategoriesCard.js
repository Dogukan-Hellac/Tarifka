import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function CategoriesCard({ title, uri, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: uri }} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 5,
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    title: {
        marginLeft: 20,
        fontSize: 20
    }
})