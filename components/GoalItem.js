import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ key, title, deleteItem, id }) => (<TouchableOpacity onPress={deleteItem}><View style={styles.listItem}><Text>{title}</Text></View></TouchableOpacity>)

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    margin: 8
}})

export default GoalItem;
