import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setgoalsList] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addNewGoal = gol => {
    setgoalsList(currentGoals => [...currentGoals, { id: Math.random().toString(), value: gol }]);

    setAddMode(false);
  }

  const cancelAdd = () => {
    setAddMode(false);
  }

  return (
    <View style={styles.screen}>

      <Button title="Add New Goal" onPress={()=>setAddMode(true)} />

      <GoalInput setgoalsList={setgoalsList} visible={addMode} addNewGoal={addNewGoal} cancelAdd={cancelAdd} />

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
