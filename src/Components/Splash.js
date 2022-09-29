import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation} from '@react-navigation/native'

const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
        navigation.replace('PaymentPage')
        }, 2000);
    })
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>payX</Text>
            <Text style={styles.subTitle}>make payment easy</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 100,
        fontFamily: 'Prompt-Regular',
        color: '#c026d3',
        position: 'relative'
    },

    subTitle: {
        fontSize: 25,
        fontFamily: 'Prompt-Regular',
        color: '#000',
        position: 'absolute', 
        top:115,
        left:20,
    }
})