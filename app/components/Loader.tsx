import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
});

const Loader = () => (
  <>
    <View style={styles.container}>
      <ActivityIndicator color="#616465" />
    </View>
  </>
);

export default Loader;
