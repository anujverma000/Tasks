import React from 'react';
import renderer from 'react-test-renderer';
import NotePad from '../NotePad';

it('NotePad renders correctly', () => {
  const props = {
    titlePlaceholder: 'title Place holder',
    descriptionPlaceholder: 'description Placeholder',
    submitText: 'Save',
    onSubmit: () => {},
  };
  const tree = renderer.create(<NotePad {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
