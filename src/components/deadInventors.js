import React from 'react'
import { Image, SafeAreaView, Text, View, FlatList } from 'react-native'
import data from '../../assets/tp.json'

const deadInventors = () => {
    const renderItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 20 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={{ uri: item.img }} style={{ width: 150, height: 320 }} />
            </View>
            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text style={{ fontSize: 15 }}>{item.desc}</Text>
            </View>
        </View>
    );
    return (<SafeAreaView>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    </SafeAreaView>
    )
}

export default deadInventors