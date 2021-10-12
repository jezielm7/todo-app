import React, { useState, useEffect } from 'react';
import { Text, Platform, KeyboardAvoidingView } from 'react-native';

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

import Data from '../../utils/data';

interface Task {
  id: string;
  title: string;
}

function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    setTasks(Data);
  }, []);

  const renderItem = ({ item }: { item: Task }) => (
    <Card>
      <TaskTitle>{item.title}</TaskTitle>
      <TrashButton>
        <Text>🗑</Text>
      </TrashButton>
    </Card>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Container>
        <ListView>
          <List
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
          />
        </ListView>
        <Form>
          <Input
            maxLength={25}
            value={newTask}
            onChangeText={task => setNewTask(task)}
            autoCorrect={false}
            placeholderTextColor="#999"
            placeholder="Adicione uma tarefa"
          />
          <Button>
            <ButtonText>+</ButtonText>
          </Button>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Home;
