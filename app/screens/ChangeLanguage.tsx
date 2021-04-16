import React from 'react';
import {View, Text, StyleSheet, Pressable, I18nManager} from 'react-native';
import languages from '../i18n/languages';
import i18n from '../i18n';
import {Header} from '../components';
import {RouteProp, useRoute} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import languageStrore from '../storage/LanguageStore';
import RNRestart from 'react-native-restart';

const styles = StyleSheet.create({
  langContainer: {
    marginVertical: 24,
    marginLeft: 24,
  },
  languageRow: {
    padding: 14,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lang: {
    paddingHorizontal: 14,
    textAlign: 'center',
    color: '#8C8080',
  },
  langSelected: {
    color: '#900',
  },
});
const langCodes = Object.keys(languages) as Array<keyof typeof languages>;
export type LANG_TYPE = typeof langCodes[0];

type ParamList = {
  Language: {
    lang: LANG_TYPE;
  };
};

const ChangeLanguage = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Language'>>();
  const changeLang = (code: LANG_TYPE) => {
    languageStrore.saveLanguage(code).then(() => {
      i18n.changeLanguage(code);
      I18nManager.forceRTL(languages[code].rtl);
      RNRestart.Restart();
    });
  };
  return (
    <>
      <Header title={i18n.t('Select Language')} />
      <View style={styles.langContainer}>
        {langCodes.map(langCode => (
          <Pressable key={langCode} onPress={() => changeLang(langCode)}>
            <View style={styles.languageRow}>
              <Text
                style={[
                  styles.lang,
                  params.lang === langCode ? styles.langSelected : {},
                ]}>
                {languages[langCode].name}
              </Text>
              {params.lang === langCode ? (
                <Icon name="check" size={18} color="#900" />
              ) : null}
            </View>
          </Pressable>
        ))}
      </View>
    </>
  );
};

export default ChangeLanguage;
