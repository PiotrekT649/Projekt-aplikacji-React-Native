import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TaskItem = (props) => {

  return (
    <View style={styles.listItem}>
      <View style={styles.taskField}>
        <Text>{props.title}</Text>
      </View>
      <View style={styles.deleteButton}>
        <Button
          color={props.color}
          title="Usuń"
          onPress={props.onDelete.bind(this, props.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#9ad9b3",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  taskField: {
    width: "70%",
  },
  deleteButton: {
    width: "25%",
  }
});

export default TaskItem;
