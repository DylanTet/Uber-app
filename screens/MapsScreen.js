import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map';
import MapView from 'react-native-maps'

const MapsScreen = () => {
  return (
    <View>
        <View style={tw`h-1/2`}>
            <Map/>
        </View>

        <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapsScreen