import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalsList, setgoalsList] = useState([]);

  return (
    <View style={styles.screen}>

      <GoalInput enteredGoal={enteredGoal} setEnteredGoal={setEnteredGoal} setgoalsList={setgoalsList} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalsList}
        renderItem={itemData => <GoalItem title={itemData.item.value} deleteItem={()=>setgoalsList(goals => goals.filter(gol=>gol.id !== itemData.item.id))} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
