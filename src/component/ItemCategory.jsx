import * as React from 'react';
import {List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ItemCategory = ({Category}) => {
  const navigation = useNavigation();
  return (
    <List.Item
      title={Category.name}
      onPress={() => navigation.navigate('truthordare', {id: Category.id})}
    />
  );
};

export default ItemCategory;
