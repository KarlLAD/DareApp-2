import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

import NextPlayer from '../component/game/NextPlayer';
import { getRandomIndex } from '../commonjs/function';

const ShowTruthOrDare = ({route})  => {

  // props : {route}

  const { id } = route.params ;

  const [showtod, setshowtod] = useState();


  const {players, position} = useSelector(state => state.player);


  const loadDareOrTruth = async () => { 

    console.log('load');

  const dataTruthOrDare  =  await loadDareOrTruth(id);

  console.log("dataTruthOrDare", dataTruthOrDare);

  const index = getRandomIndex(0,dataTruthOrDare.lenght);

  console.log(index);

  setshowtod(dataTruthOrDare[index]) ;


   } ;


   useEffect(()=> {

    loadDareOrTruth();
   },[] )

  return (
    <View>
      <Text>{players[position]?.name}</Text>
      <Text>{showtod?.title} </Text>
      
      <NextPlayer id={id} />

    </View>
  );
};

export default ShowTruthOrDare;
