import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { useState } from 'react'
import styles from './App.components.style';
import Task from './components/Task';
import Form from './components/Form';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    // alert(task)
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index) => {
    // Alert.alert('Alert Title', 'My Alert Msg', [
    //   {
    //     text: 'OK',
    //     onPress: () => {
          // let taskListTmp = [...taskList];
          // taskListTmp.splice(index, 1);
          // setTaskList(taskListTmp);
    //     },
    //   },
    //   {text: 'cancel', onPress: () => {}},
    // ]);

    let taskListTmp = [...taskList];
    taskListTmp.splice(index, 1);
    setTaskList(taskListTmp);
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.ScrollItems}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
          {/* <Task /> */}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask}/>
      <StatusBar style="auto" />
    </View>
  );
}