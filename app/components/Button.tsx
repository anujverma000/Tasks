import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
  },
  buttonStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  buttonTextStyle: {
    color: 'white',
  },
});

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({label, onPress}: ButtonProps) => {
  return (
    <LinearGradient
      colors={['#fe9168', '#ff4a73']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <Pressable style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.buttonTextStyle}>{label}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Button;
