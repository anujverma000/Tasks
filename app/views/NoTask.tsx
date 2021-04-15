import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descripton: {
    fontSize: 14,
    color: '#aba2a3',
  },
});
const NoTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.descripton}>
        There are no tasks created here yet.
      </Text>
    </View>
  );
};

export default NoTask;
