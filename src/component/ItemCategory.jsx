import * as React from 'react';
import {Button, List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles';
import {Text, View, Image} from 'react-native';

console.log('ItemCategory');
const ItemCategory = ({category}) => {
  const navigation = useNavigation();
 

  // console.log('category : ', category);

  return (
    // <List.Item
    //   title={category.name}
    //   onPress={() => navigation.navigate('truthordare', {id: Category.id})}
    // />

    //style={[styles.slide, {backgroundColor: category.color}]}
    <View>
      <Text>category name</Text>
      {/* {category.name} */}
      {/* <Text style={styles.slideTitle}>{category.name}</Text> */}
      {/* <Image source={{uri: category.image}} style={styles.slideImage} /> */}
      {/* <Text style={styles.slideText}>{category.description}</Text> */}

      {/* <Button
        mode="contained"
        onPress={() => navigation.navigate('truthordare', {id: category.id})}>
        Press me
      </Button> */}
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
