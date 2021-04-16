import React from 'react';
import renderer from 'react-test-renderer';
import {TodoCategoryProps, TodoProps} from '../../types';
import Todo from '../Todo';

it('Todo renders correctly', () => {
  const category: TodoCategoryProps = {
    title: 'category Title',
    description: 'category description',
    id: 'category-id',
  };

  const props: TodoProps = {
    id: '1234-test',
    title: 'Test Title',
    description: 'Test Description',
    completed: false,
    category: category,
  };

  const tree = renderer.create(<Todo {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
