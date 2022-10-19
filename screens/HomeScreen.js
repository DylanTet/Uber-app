import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image 
                style={{
                    height: 100,
                    width: 100,
                    resizeMode: "contain"
                }}
                source={{
                    uri: "https://links.papareact.com/gzs"
                }}
            />
        <NavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen