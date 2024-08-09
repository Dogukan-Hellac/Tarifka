import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function DetailsCard({ title, uri, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: uri }} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        position: 'relative',
        marginBottom: 10,
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    titleContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right', 
    },
});
