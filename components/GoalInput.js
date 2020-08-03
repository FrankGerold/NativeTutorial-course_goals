import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = ({ setgoalsList, visible, addNewGoal, cancelAdd }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const addGoalHandler = () => {
    addNewGoal(enteredGoal);

    setEnteredGoal('');
  };

  const candelHandler = () => {
    setEnteredGoal('');

    cancelAdd();
  }

  return (<Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={enteredText=>setEnteredGoal(enteredText)} />
        <Button title="Add" onPress={addGoalHandler} />
        <Button title="Cancel" color='red' onPress={candelHandler} />
      </View>
    </Modal>)
  };

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10
  }});

export default GoalInput;
