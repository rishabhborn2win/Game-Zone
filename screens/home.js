import React from 'react';
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    titleText: {
        fontFamily: 'sans-serif-thin',
        fontSize: 25
    }  
});