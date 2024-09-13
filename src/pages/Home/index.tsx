import React, { useEffect } from 'react'
import { Button, Pressable, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles/styles.'
import Entypo from '@expo/vector-icons/Entypo';

const API_KEY = process.env.API_KEY

const HomeScreen = ({ navigation }) => {

    const [location, setLocation] = React.useState('')

    const handlePress = () => {
        alert('Menu')
    }

    const handleSearch = async () => {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`)
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        console.log(location)
    }, [location])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            {/*   <View style={styles.header}>
                <Pressable style={styles.logo} onPress={handlePress}>
                    <Entypo name="menu" size={40} color="white" />
                </Pressable>
            </View> */}
            <View style={styles.conteudo}>
                <Text style={styles.text}>Informe uma cidade:</Text>
                <TextInput
                    style={styles.text}
                    placeholder="Cidade"
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                />
                <TouchableOpacity
                    onPress={handleSearch}
                    style={styles.button}
                >
                    <Text>Pesquisar</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('User')}
                        style={styles.button}
                    >
                        <Text>Go To User</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen