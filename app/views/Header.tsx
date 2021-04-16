import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Language from './Language';

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    color: '#8C8080',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 24,
  },
  back: {
    paddingHorizontal: 24,
  },
});

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.back}>
            <Icon name="angle-left" size={24} color="#8C8080" />
          </View>
        </Pressable>
      )}
      <Text style={styles.heading}>{title}</Text>
      <Language />
    </View>
  );
};

export default Header;
