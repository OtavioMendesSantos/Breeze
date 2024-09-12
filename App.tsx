import React from "react";
import {
  View, StyleSheet, StatusBar, SafeAreaView,
  Text,
  Pressable,
  TextInput
} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

const API_KEY = process.env.API_KEY


export default function Home() {
  const [location, setLocation] = React.useState('')
  const handlePress = () => {
    alert('Menu')
  }

  const handleSearch = async () => {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.header}>
        <Pressable style={styles.logo} onPress={handlePress}>
          <Entypo name="menu" size={40} color="white" />
        </Pressable>
        <Text style={{ color: 'white', fontSize: 20 }}>Brasilia Cast</Text>
      </View>
      <View style={styles.conteudo}>
        <Text>Informe uma cidade:</Text>
        <TextInput placeholder="Cidade" />
        <Pressable style={{ backgroundColor: '#ffa210', padding: 10, marginTop: 10 }}>Pesquisar</Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#ffa210' */
  },
  header: {
    width: '100%',
    backgroundColor: '#000',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    left: 10
  },
  conteudo: {
    height: '100%',
    width: '100%',
    backgroundColor: '#c7c7c7',
    padding: 20,
  }
})