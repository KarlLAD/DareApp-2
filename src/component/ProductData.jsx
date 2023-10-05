import { View, Text, FlatList } from 'react-native'
import React from 'react'
import products from '../data'
import CardProduct from './CardProduct'
import { stylesProduct } from '../tuto/product/stylesProduct'

const ProductData = ({products}) => {

    console.log('products', products);
    
  return (
    <View style={stylesProduct.container} >
    <FlatList
  
    data={products}
    renderItem={({item}) => <CardProduct product={item} />}
    keyExtractor={item=>item.id}

    


    />
    
    </View>
  )
}

export default ProductData