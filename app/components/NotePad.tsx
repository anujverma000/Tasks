import React, {useState, useRef} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {NotesProps} from '../types';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f6',
    padding: 24,
  },
  headingInput: {
    paddingHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    elevation: 1,
  },
  descriptionInput: {
    paddingHorizontal: 12,
    fontSize: 14,
    lineHeight: 24,
    backgroundColor: 'white',
    borderBottomLeftRadius: 6,
    textAlignVertical: 'top',
    borderBottomRightRadius: 6,
    justifyContent: 'flex-start',
    elevation: 1,
  },
  buttonContainer: {
    marginVertical: 12,
  },
});
interface Props {
  titlePlaceholder: string;
  descriptionPlaceholder: string;
  submitText: string;
  onSubmit: (props: NotesProps) => void;
  title?: string;
  description?: string;
}

const NotePad = (props: Props) => {
  const [title, setTitle] = useState<string>(props.title || '');
  const [description, setDescription] = useState<string>(
    props.description || '',
  );
  const headingEl = useRef<TextInput>(null);
  const descriptionEl = useRef<TextInput>(null);
  const onSave = () => {
    const note: NotesProps = {title, description};
    props.onSubmit(note);
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={headingEl}
        style={styles.headingInput}
        placeholder={props.titlePlaceholder}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => descriptionEl.current?.focus()}
        blurOnSubmit={false}
        value={title}
        onChangeText={setTitle}
        placeholderTextColor={'#8C8080'}
        autoFocus={true}
      />
      <TextInput
        ref={descriptionEl}
        style={styles.descriptionInput}
        placeholder={props.descriptionPlaceholder}
        autoCompleteType="off"
        returnKeyType="send"
        autoCapitalize="none"
        value={description}
        multiline={true}
        numberOfLines={6}
        onChangeText={setDescription}
        placeholderTextColor={'#8C8080'}
      />
      <View style={styles.buttonContainer}>
        <Button label={props.submitText} onPress={onSave} />
      </View>
    </View>
  );
};

export default NotePad;
