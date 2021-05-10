import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import TaskItem from "./component/TaskItem";
import TaskInput from "./component/TaskInput";

export default function App() {
  const [courseTasks, setCourseTasks] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("grey");

  const addTaskHandler = (taskTitle) => {
    setCourseTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle, color: selectedColor },
    ]);
    setisAddMode(false);
  };

  const removeTaskHandler = (taskId) => {
    setCourseTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  };

  const cancelTaskHandler = () => {
    setisAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        color="#02c984"
        title="Dodaj nowe zadanie"
        onPress={() => setisAddMode(true)}
      />
      <TaskInput
        visible={isAddMode}
        onAddTask={addTaskHandler}
        onCancel={cancelTaskHandler}
        settingSelectedValue={setSelectedColor}
        setColor={selectedColor}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseTasks}
        renderItem={(itemData) => (
          <TaskItem
            id={itemData.item.id}
            onDelete={removeTaskHandler}
            title={itemData.item.value}
            color={itemData.item.color}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
