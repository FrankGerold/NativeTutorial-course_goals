import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

 const GoalInput = ({ enteredGoal, setEnteredGoal, setgoalsList }) => (<View style={styles.inputContainer}>
    <TextInput placeholder="Course Goal" style={styles.input} onChangeText={enteredText=>setEnteredGoal(enteredText)} />
    <Button title="ADD" onPress={()=>{
        setgoalsList(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
      }} />
  </View>)

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '80%'
  }});

export default GoalInput;
