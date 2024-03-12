import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Coin = () => {
    const count = useSelector((state) => state.counter.count)



    // const dispatch = useDispatch()
    return (
        <View style={{ alignSelf: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 30, color: 'black' }}> Count : {count}</Text>
        </View>
    )
}

export default Coin

const styles = StyleSheet.create({})