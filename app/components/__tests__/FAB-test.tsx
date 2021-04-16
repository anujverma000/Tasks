import React from 'react';
import renderer from 'react-test-renderer';
import FAB from '../FAB';

it('FAB renders correctly', () => {
  const props = {
    label: 'Test',
    onPress: () => {},
  };
  const tree = renderer.create(<FAB {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
