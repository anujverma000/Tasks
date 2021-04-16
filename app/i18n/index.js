import i18next from 'i18next';
import languageStrore from '../storage/LanguageStore';
import languages from './languages';

languageStrore.getLanguage().then(lang => {
  i18next.init({
    interpolation: {
      escapeValue: false,
    },
    lng: lang,
    resources: languages,
  });
});

export default i18next;
