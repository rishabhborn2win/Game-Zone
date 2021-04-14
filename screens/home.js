import React, {useState} from 'react';
import {  View, Text, FlatList, TouchableOpacity } from "react-native";
import Card from '../shared/card';
import {globalStyles} from '../styles/global'

export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        { title: 'Rishabh Mishra', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Digvijay', rating: 5, body: 'lorem ipsum', key: '2'},
        { title: 'Arnav', rating: 4, body: 'lorem ipsum', key: '3'},
        { title: 'Lekhansh', rating: 5, body: 'lorem ipsum', key: '4'},
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

    
