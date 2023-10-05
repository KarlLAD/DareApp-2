import * as React from 'react';
import {Button, List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles';
import {Text, View, Image} from 'react-native';

const ItemCategory = ({category}) => {
  const navigation = useNavigation();
  console.log('ItemCategory');
  console.log('category : ', category);

  return (
    // <List.Item
    //   title={Category.name}
    //   onPress={() => navigation.navigate('truthordare', {id: Category.id})}
    // />

    <View style={[styles.slide, {backgroundColor: category.color}]}>
      <Text style={styles.slideTitle}>{category.name}</Text>
      <Image source={{uri: category.image}} style={styles.slideImage} />
      <Text style={styles.slideText}>{category.description}</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('truthordare', {id: category.id})}>
        Press me
      </Button>
    </View>

    // {/* <TouchableOpacity onPress={ ()=>  }  style={[
    //     styles.slide,
    //     {
    //       backgroundColor : category.color,
    //     }

    // ]} />  */}
  );
};

export default ItemCategory;
