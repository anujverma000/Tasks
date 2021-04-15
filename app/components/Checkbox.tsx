import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#aba2a3',
  },
  selected: {
    backgroundColor: '#ff4b6e',
    borderColor: '#ff4b6e',
    color: 'white',
  },
});
interface Props {
  onChange: (selected: boolean) => void;
  checked: boolean;
}

const Checkbox = ({checked, onChange}: Props) => {
  const [selected, setSelected] = useState<boolean>(checked);
  const toggle = () => {
    setSelected(!selected);
    onChange(!selected);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={toggle}>
      <View style={[styles.checkbox, selected ? styles.selected : {}]}>
        {selected && <Icon name="check" size={18} color="#900" />}
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
