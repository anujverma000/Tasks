import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
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
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.back}>
            <Icon name="angle-left" size={24} color="#8C8080" />
          </View>
        </TouchableWithoutFeedback>
      )}
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export default Header;
