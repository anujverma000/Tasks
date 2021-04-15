import {I18nManager} from 'react-native';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

export const DEFAULT_LANGUAGE = 'en';

export const translationGetters = {
  en: () => require('./en.json'),
  fr: () => require('./ar.json'),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const t = translate;

export const setI18nConfig = (codeLang = null) => {
  const fallback = {languageTag: DEFAULT_LANGUAGE, isRTL: false};
  const lang = codeLang ? {languageTag: codeLang, isRTL: false} : null;

  const {languageTag, isRTL} = lang ? lang : fallback;

  translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;

  return languageTag;
};
