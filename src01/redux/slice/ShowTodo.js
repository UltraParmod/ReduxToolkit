import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../../redux/slice/todo'
import React from 'react'

const ShowTodo = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    // console.log('state', state)

    if (state.todo.isLoading) {
        return <Text>Loading....</Text>
    }
    return (
        <View style={{ marginTop: 30 }}>
            <View style={{ alignSelf: 'center' }}>
                <Button title='ShowTodo' onPress={(e) => dispatch(fetchTodos())} />
            </View>

            <ScrollView>
                {
                    state.todo.data && state.todo.data.map((e, index) => (
                        <Text key={index}>{e.title}</Text>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default ShowTodo

const styles = StyleSheet.create({})