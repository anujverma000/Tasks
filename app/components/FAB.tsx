import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    bottom: 30,
    right: 30,
    position: 'absolute',
    borderRadius: 50,
  },
  fabStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  fabTextStyle: {
    color: 'white',
  },
});

interface FABProps {
  label: string;
  onPress: () => void;
}

const FAB = ({label, onPress}: FABProps) => {
  return (
    <LinearGradient
      colors={['#fe9168', '#ff4a73']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <TouchableOpacity style={styles.fabStyle} onPress={onPress}>
        <Text style={styles.fabTextStyle}>{label}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FAB;
