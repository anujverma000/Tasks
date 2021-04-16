import {saveData, getData} from './Storage';
import {LANG_TYPE} from '../screens/ChangeLanguage';

const LANGUAGE_STORAGE_KEY = '@com.tasks.language';

export const DEFAULT_LANGUAGE = 'en';

class LanguageStrore {
  async getLanguage(): Promise<LANG_TYPE> {
    return getData(LANGUAGE_STORAGE_KEY).then(language => {
      return (language as LANG_TYPE) || DEFAULT_LANGUAGE;
    });
  }

  async saveLanguage(language: string): Promise<void> {
    return saveData(LANGUAGE_STORAGE_KEY, language);
  }
}

const languageStrore = new LanguageStrore();

export default languageStrore;
