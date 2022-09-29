import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";
import paymentDetails from '../mobxStore'

const PaymentPage = () => {
  
  const submit = () => {
    console.log(paymentDetails.eth)
  }

  const amount = (amount) => {
    paymentDetails.setAmount(amount)
  }

  const address = (toAddress) => {
    paymentDetails.setAddress(toAddress)
  }

  return (
    <View style={styles.mianView}>
        <Image 
            style={styles.logo}
            source={require('../assets/ethereum-logo.png')}
        />
        
        <View style={styles.inputText}>
            <TextInput 
                style={styles.text} 
                keyboardType = 'decimal-pad' 
                placeholder='Amount' 
                placeholderTextColor='#999999'
                value={paymentDetails.eth.amount} 
                onChangeText={(value) => amount(value)}
            />
            <TextInput 
                style={styles.text} 
                placeholder='Address' 
                placeholderTextColor='#999999' 
                value={paymentDetails.eth.address} 
                onChangeText={(value) => address(value)}
            />
        </View>

        <TouchableOpacity onPress={submit}>
            <Text style={styles.btn}>MAKE PAYMENT</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PaymentPage

const styles = StyleSheet.create({
    mianView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7'
      },
    
      logo: {
        width: 200,
        height: 200
      },
    
      text: {
        borderBottomWidth: 2,
        borderColor: '#000000',
        width: 300,
        textAlign: 'center',
        margin: 20,
        borderRadius: 20,
        fontSize: 25,
        fontFamily: 'Prompt-Regular',
        color: '#000000'
      },
    
      btn: {
        width: 200,
        textAlign: 'center',
        margin: 30,
        padding: 10,
        borderRadius:8,
        fontSize: 20,
        backgroundColor: '#c026d3',
        color: '#fff',
        fontFamily: 'Prompt-Regular',
      }
})