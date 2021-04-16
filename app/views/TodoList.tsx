import {useFocusEffect} from '@react-navigation/core';
import React, {useState, useCallback} from 'react';
import {StyleSheet, ScrollView, View, Pressable} from 'react-native';
import {Checkbox, Todo} from '../components';
import {todoStore} from '../storage';
import {TodoCategoryProps, TodoProps} from '../types';
import Icon from 'react-native-vector-icons/FontAwesome';
import NoTask from './NoTask';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 42,
    paddingBottom: 100,
  },
  title: {
    fontSize: 16,
    color: '#8C8080',
  },
  descripton: {
    fontSize: 14,
    color: '#aba2a3',
  },
  todoRow: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  select: {
    justifyContent: 'center',
  },
  todo: {
    flexBasis: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  delete: {
    paddingHorizontal: 24,
  },
});

interface TodoListProps {
  todoCategory: TodoCategoryProps;
}

const TodoList = ({todoCategory}: TodoListProps) => {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [filteredTodoList, setFilteredTodoList] = useState<TodoProps[]>([]);

  useFocusEffect(
    useCallback(() => {
      todoStore.getAllTodos().then(todos => {
        setTodoList(todos);
      });
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const selectedTodos = todoList.filter(toto => {
        return toto.category.id === todoCategory.id;
      });

      setFilteredTodoList(selectedTodos);
    }, [todoList, todoCategory]),
  );

  const taskCompletedToggle = async (todo: TodoProps) => {
    todoStore.saveTodo(todo).then(() => {
      setTodoList(todoList.map(t => (t.id === todo.id ? todo : t)));
    });
  };
  const deleteTodo = async (todo: TodoProps) => {
    todoStore.deleteTodo(todo.id).then(() => {
      setTodoList(todoList.filter(t => t.id !== todo.id));
    });
  };
  if (filteredTodoList.length === 0) {
    return <NoTask />;
  }
  return (
    <ScrollView style={styles.container}>
      {filteredTodoList.map(todo => (
        <View style={styles.todoRow} key={todo.id}>
          <View style={styles.select}>
            <Checkbox
              checked={todo.completed}
              onChange={selected =>
                taskCompletedToggle({...todo, completed: selected})
              }
            />
          </View>
          <View style={styles.todo}>
            <Pressable>
              <Todo {...todo} />
            </Pressable>
          </View>
          {todo.completed && (
            <Pressable style={styles.delete} onPress={() => deleteTodo(todo)}>
              <Icon name="trash" size={18} color="#aba2a3" />
            </Pressable>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default TodoList;
