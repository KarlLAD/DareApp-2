import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {updateLoading} from '../redux/loading';
import ItemCategory from '../component/ItemCategory';
import {loadData} from '../commonjs/function';

import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

const Category = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  const loadCategory = async () => {
    dispatch(updateLoading());
    const dataCategories = await loadData('category');

    // console.log("dataCategories : " ,dataCategories );

    setCategories(dataCategories);

    // stop chargement
  };

  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <View>
      <Text>Category</Text>
      <AppIntroSlider
        data={categories}
        renderItem={({item}) => <ItemCategory Category={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Category;
