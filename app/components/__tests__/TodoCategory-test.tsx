import React from 'react';
import renderer from 'react-test-renderer';
import {TodoCategoryProps} from '../../types';
import TodoCategory, {TodoCategoryDisplyProps} from '../TodoCategory';

it('TodoCategory renders correctly', () => {
  const category: TodoCategoryProps = {
    title: 'category Title',
    description: 'category description',
    id: 'category-id',
  };
  const props: TodoCategoryDisplyProps = {
    ...category,
    selected: true,
  };
  const tree = renderer.create(<TodoCategory {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
