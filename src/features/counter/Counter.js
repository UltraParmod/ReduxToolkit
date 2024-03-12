import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../counter/counterSlice'


const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 30, color: 'black' }}> Count : {count}</Text>
            <View style={{ marginVertical: 20 }}>
                <Button title='increment' onPress={() => {
                    dispatch(increment())
                }} />
            </View>

            <View>
                <Button title='Decrement' onPress={() => {
                    dispatch(decrement())
                }} />
            </View>

        </View>
    )
}

export default Counter

const styles = StyleSheet.create({})