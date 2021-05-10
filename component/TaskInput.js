import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskInputHandler = (enteredTask, selectedColor) => {
    setEnteredTask(enteredTask);
  };

  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  const colorSelectorSupport = props.setColor;
  console.log(colorSelectorSupport)

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <View style={styles.inputLine}>
          <TextInput
            placeholder="Dodaj swoje zadanie ... "
            style={styles.input}
            onChangeText={taskInputHandler}
            value={enteredTask}
          />

          {/* Rozwijana lista kolorów */}
          <View style={styles.colPick}>
            <Picker
              mode="dropdown"
              style={{ height: 25, width: 40 }}
              onValueChange={(itemValue, itemIndex) => props.settingSelectedValue(itemValue)}>
              <Picker.Item color="grey" label="Szary" value="#8a8a8a" />
              <Picker.Item color="blue" label="Niebieski" value="#2e5cdb" />
              <Picker.Item color="red" label="Czerwony" value="#fa0a0a" />
              <Picker.Item color="#d9d504" label="Żółty" value="#d9d504" />
              <Picker.Item color="green" label="Zielony" value="#38d100" />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button title="Dodaj" color="#02c984" onPress={addTaskHandler} />
          </View>
          <View style={styles.buttons}>
            <Button title="Anuluj" color="#008c3f" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "75%",
    borderColor: "black",
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  buttons: {
    width: "45%",
  },
  inputLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colPick: {
    borderBottomWidth: 1,
    marginBottom: 15,
    borderColor: "black"
  }
});

export default TaskInput;
