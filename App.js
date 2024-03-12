import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
// import Counter from './src/features/counter/Counter'
// import Coin from './src/features/coin/Coin'
// import { store } from './src/app/store'
// import Theme from './src/theme/Theme'
import store from './src01/redux/store'
import ShowTodo from './src01/redux/slice/ShowTodo'


const App = () => {

  return (
    <Provider store={store}>
      <View style={{ flex: 1, }}>
        {/* <Counter />
        <Coin />
        <Theme /> */}
        <ShowTodo />
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})