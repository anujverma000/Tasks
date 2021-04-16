import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '../Checkbox';

it('Checkbox renders correctly', () => {
  const props = {
    checked: false,
    onChange: () => {},
  };
  const tree = renderer.create(<Checkbox {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
