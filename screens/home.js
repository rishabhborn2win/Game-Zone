import React, {useState} from 'react';
import {  View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import Card from '../shared/card';
import {globalStyles} from '../styles/global'
import {MaterialIcons} from '@expo/vector-icons';


export default function Home({navigation}) {

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Rishabh Mishra', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Digvijay', rating: 5, body: 'lorem ipsum', key: '2'},
        { title: 'Arnav', rating: 4, body: 'lorem ipsum', key: '3'},
        { title: 'Lekhansh', rating: 5, body: 'lorem ipsum', key: '4'},
    ])
    return (
        <View style={globalStyles.container}>


            <Modal visible={modalOpen} animationType='slide'>
                <View style={globalStyles.modalContent}>
                <MaterialIcons
                name='close'
                size={24}
                // style={}
                onPress={() => setModalOpen(false)}
            />
                    <Text>Hello From the modal</Text>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
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


const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth:1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    }
})
    
