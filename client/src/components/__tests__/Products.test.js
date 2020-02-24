import React from 'react';
import renderer from 'react-test-renderer';
import Products from '../Products';

describe('Products', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Products />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
