import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: StatusBar.currentHeight || 0,
  },

  Modal: {backgroundColor: 'white', padding: 20},

  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 50,
  },

  title: {
    fontSize: 22,
  },

  slide: {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },

  slideTitle:  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },

  description:  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }

});
