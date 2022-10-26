import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlices'



const HomeScreen = () => {
    const dispatch = useDispatch();

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
            <GooglePlacesAutocomplete
                nearbyPlacesAPI='GooglePlaceSearch'
                debounce={400}
                styles={{
                    container: {
                        flex: 0
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                onPress={(data, details=null) => {
                    dispatch(setOrigin({
                        location: data.geometry.location,
                        description: data.description
                    }))

                    dispatch(setDestination(null))
                }}
                returnKeyType={"search"}
                fetchDetails={true}
                minLength={2}
                enablePoweredByContainer={false}
                placeholder='Where From?'
                query={{
                    key: API_KEY,
                    language: "en",
                }}
            />
            <NavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen