import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc'
import React from 'react'

const data = [{
    id: "123",
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map"
},
{
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen"
}]

const NavOptions = () => {
    const navigation = useNavigation();

  return (
    <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image 
                            style={{
                                height: 120,
                                width: 120,
                                resizeMode: "contain",
                                
                            }}
                            source={{uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name='arrowright' 
                            color='white' 
                            size={20} 
                        />
                    </View>
            </TouchableOpacity>
        )}
    />  
  )
}

export default NavOptions