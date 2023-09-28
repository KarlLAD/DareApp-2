import { View, Text } from 'react-native'
import React from 'react'
import { delPlayer } from '../../redux/player';
import {  Button } from "react-native-paper";
import { useDispatch } from 'react-redux';



const ItemPlayer = ({ player}) => {

  const dispatch = useDispatch();

  //
  const supprimer = () => { 

    // console.log('player', player);
    // dispacher entrée
    dispatch(delPlayer(player));
   }


  return (
    <View>
      <Text>{player.name}</Text>
      <Button onPress={supprimer}  > Supp.</Button>
    </View>
  )
}

export default ItemPlayer