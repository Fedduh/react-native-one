import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// first element is props. Could also destructure to {title}
const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{props.item.text}</Text>
        <Text
          style={styles.delete}
          onPress={() => props.deleteItem(props.item.id)}>
          X
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  delete: {
    color: 'red',
    fontWeight: '800',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ListItem;
