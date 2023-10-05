import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
// import {navigation} from '@react-navigation/native';

const TruthOrDare = ({navigation}) => {
  return (
    <View>
      <Text>TruthOrDare</Text>
      <Button
        mode="contained-tonal"
        onPress={
          (console.log('T or D'), () => navigation.navigate('showtruthordare', {id : id, type:'dare'}))
        }>
        Action
      </Button>

      <Button
        mode="contained"
        onPress={
          (console.log('T or D'), () => navigation.navigate('showtruthordare',{id : id, type:'truth'} ))
        }>
        Vérité
      </Button>
    </View>
  );
};

export default TruthOrDare;
