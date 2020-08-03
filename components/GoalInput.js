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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color='red' onPress={candelHandler} />
          </View>
        </View>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
