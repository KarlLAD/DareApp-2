import { View, Text } from 'react-native'
import React from 'react'
import CategoryData from './category/CategoryData'
import { Provider } from 'react-native-paper'

const Tuto = () => {
  return (
    <Provider >
      <View>
      <Text>Tuto</Text>
      <CategoryData/>
      <CategoryStore />
      
    </View>
    </Provider>

  )
}

export default Tuto