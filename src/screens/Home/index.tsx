/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  Text,
  Alert,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Form,
  Input,
  Button,
  ButtonText,
  ListView,
  List,
  Card,
  TaskTitle,
  TrashButton,
} from './styles';

// import Data from '../../utils/data';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    async function saveTasks() {
      AsyncStorage.setItem('task', JSON.stringify(tasks));
    }
    saveTasks();
  }, [tasks]);

  useEffect(() => {
    async function loadTasks() {
      const task = await AsyncStorage.getItem('task');

      task && setTasks(JSON.parse(tasks));
    }
    loadTasks();
  }, [tasks]);

  async function createTask() {
    if (newTask === '') {
      return;
    }

    const search = tasks.filter(task => task === newTask);

    if (search.length !== 0) {
      Alert.alert('Atenção!', 'Tarefa existente!');
      return;
    }

    setTasks([...tasks, newTask]);

    setNewTask('');
    Keyboard.dismiss();
  }

  async function deleteTask(item) {
    Alert.alert(
      'Remover Task',
      'Tem certeza que deseja remover esta tarefa?',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            return;
          },
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => setTasks(tasks.filter(task => task !== item)),
        },
      ],
      { cancelable: false }
    );
  }

  const renderItem = ({ item: title }) => (
    <Card>
      <TaskTitle>{title}</TaskTitle>
      <TrashButton
        disabled={title.length === 0}
        onPress={() => deleteTask(title)}
      >
        <Text>🗑</Text>
      </TrashButton>
    </Card>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={0}
      enabled={Platform.OS === 'ios'}
    >
      <Container>
        <ListView>
          <List
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => `${item.toString()}`}
            showsVerticalScrollIndicator={false}
          />
        </ListView>
        <Form>
          <Input
            maxLength={25}
            value={newTask}
            onChangeText={task => setNewTask(task)}
            autoCorrect={false}
            placeholderTextColor="#000"
            placeholder="Adicione uma tarefa"
          />
          <Button onPress={() => createTask()}>
            <ButtonText>+</ButtonText>
          </Button>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Home;
