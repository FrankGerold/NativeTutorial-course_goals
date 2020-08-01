import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalsList, setgoalsList] = useState([]);

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={enteredText=>setEnteredGoal(enteredText)} />
        <Button title="ADD" onPress={()=>{
            setgoalsList(currentGoals => [...currentGoals, enteredGoal]);
          }} />
      </View>

      <FlatList
        data={goalsList}
        renderItem={itemData => <View key={itemData.index} style={styles.listItem}><Text>{itemData.item}</Text></View>}
      />

      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '80%'
  },
  listItem: {
    padding: 12,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    margin: 8
  }
});
