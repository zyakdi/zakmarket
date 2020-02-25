import React from 'react';
import renderer from 'react-test-renderer';
import Product from '../Product';

describe('Product', () => {
  const product = {
    idProduct: 12,
    name: 'Test product',
    price: 22,
    details: 'Details of the test product',
    type: 'test'
  };

  const handleDelete = jest.fn();

  test('snapshot renders', () => {
    const component = renderer.create(<Product product={product} handleDelete={handleDelete}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
