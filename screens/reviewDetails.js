import React from 'react';
import { Image, View, Text, StyleSheet } from "react-native";
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

export default function ReviewDetails({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Card>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
            <View style={styles.rating}>
                <Text>GameZone rating: </Text>
                <Image source={images.ratings[navigation.getParam('rating')]} />
            </View>
            {/* <Text>{ navigation.getParam('rating') }</Text>  */}
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',

    }
})
