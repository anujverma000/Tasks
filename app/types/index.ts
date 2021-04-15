export interface TodoCategoryProps {
  title: string;
  description: string;
  taskCount: number;
  id: string;
}

export interface TodoProps {
  id: string;
  title?: string;
  description?: string;
  completed: boolean;
  category?: TodoCategoryProps;
}

export type NotesProps = {
  title: string;
  description: string;
};
