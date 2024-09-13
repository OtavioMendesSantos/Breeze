import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../../styles/styles.'

const User = ({ navigation }: any) => {
  return (
    <View style={styles.centerContainer}>
      <Text>User</Text>
      <Button
        title="Return Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default User
