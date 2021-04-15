import {TodoCategoryProps} from '../types';
import {saveData, getData, removeData, getAllKeys, multiGet} from './Storage';

const CATEGORY_STORAGE_KEY = '@com.tasks.category';

class CategoryStrore {
  async getCategory(id: string): Promise<TodoCategoryProps> {
    return getData(`${CATEGORY_STORAGE_KEY}:${id}`).then(json => {
      return JSON.parse(json || '{}') as TodoCategoryProps;
    });
  }

  async saveCategory(todoCategory: TodoCategoryProps): Promise<void> {
    return saveData(
      `${CATEGORY_STORAGE_KEY}:${todoCategory.id}`,
      JSON.stringify(todoCategory),
    );
  }

  async deleteCategory(id: string): Promise<void> {
    return removeData(`${CATEGORY_STORAGE_KEY}:${id}`);
  }

  async getAllCategories(): Promise<TodoCategoryProps[]> {
    return getAllKeys()
      .then((keys: string[]) => {
        const fetchKeys = keys.filter(k => {
          return k.startsWith(CATEGORY_STORAGE_KEY);
        });
        return multiGet(fetchKeys);
      })
      .then(todoCategories => {
        return todoCategories.map(todoCategory => {
          return JSON.parse(todoCategory[1] || '{}') as TodoCategoryProps;
        });
      });
  }
}

const categoryStrore = new CategoryStrore();

export default categoryStrore;
