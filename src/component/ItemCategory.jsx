import * as React from 'react';
import {List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {  View, Text} from "react-native";

const ItemCategory = ({Category}) => {
  const navigation = useNavigation();


  // return (
  //   <List.Item
  //     title={Category.name}
  //     onPress={() => navigation.navigate('truthordare', {id: Category.id})}
  //   />
  // );


  return (
    
    <View style={

     [ styles.slide, 
      {
      backgroundColor:Category.color != undefined ? Category.color: "#0000",
     },
      ]
      
      }>
      <Text style={styles.slideTitle}>{item.slideTitle}</Text>
      {/* <Image source={{ Category.image }} /> */}
      <Text style={styles.description}>{item.description}</Text>

    </View>
  );



};

export default ItemCategory;
