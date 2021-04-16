import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import languages from '../i18n/languages';
import {LANG_TYPE} from '../screens/ChangeLanguage';
import languageStrore, {DEFAULT_LANGUAGE} from '../storage/LanguageStore';

const styles = StyleSheet.create({
  language: {
    color: '#8C8080',
    fontSize: 12,
    paddingHorizontal: 24,
  },
});

const Language = () => {
  const [lang, setLang] = useState<LANG_TYPE>(DEFAULT_LANGUAGE);
  const navigation = useNavigation();

  useEffect(() => {
    languageStrore.getLanguage().then(setLang);
  }, []);

  if (!lang) {
    return null;
  }
  return (
    <Pressable onPress={() => navigation.navigate('ChangeLanguage', {lang})}>
      <Text style={styles.language}>{languages[lang].name}</Text>
    </Pressable>
  );
};

export default Language;
