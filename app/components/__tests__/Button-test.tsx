import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

it('Button renders correctly', () => {
  const props = {
    label: 'Test',
    onPress: () => {},
  };
  const tree = renderer.create(<Button {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
