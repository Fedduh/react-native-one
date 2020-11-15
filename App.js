// functional components with hooks
import React, {useState} from 'react';
// have to use react native components instead of HTML elements
import {View, StyleSheet, FlatList, Alert} from 'react-native';
// View: most fundamental container. Supports layout with flexbox.
// default flex is column
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  // state with a default
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Egg'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const addItem = (text) => {
    if (!text) {
      return Alert.alert('Error', 'No input', [{text: 'Ok'}]);
    }
    setItems((prevItems) => {
      return [{id: uuidv4(), text}, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping list" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
