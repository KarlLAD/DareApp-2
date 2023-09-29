// import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {nextPlayer} from '../../redux/player';




const NextPlayer = ({navigation}) => {
  
  const dispatch = useDispatch();

  const {players, position} = useSelector(state => state.player);

  const suivant = () => {
    if (players.length == position + 1) {
      dispatch(nextPlayer(0));
    } else {
      dispatch(nextPlayer(position + 1));
    }

    navigation.navigate('truthordare',{ id : id} )
  };

  return (
    <Button icon="skip-next-circle" onPress={suivant}>
      Next
    </Button>
  );
};

export default NextPlayer;
