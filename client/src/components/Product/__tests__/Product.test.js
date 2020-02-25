import React from 'react';
import Product from '../Product';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";



describe('Product display', () => {
  let container = null;

  beforeEach(() => {
    // Put a div element in document to test inside
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Remove div element from document
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("displays information about the product", () => {

    const product = {
      idProduct: 18,
      name: "Sweet name",
      price: 999,
      type: "Nice type",
      details: "This is a test and these are the details"
    };

    act(() => {
      render(<Product product={product}/>, container);
    });
    expect(container.textContent).toBe("NICE TYPESweet name999 $Details: This is a test and these are the detailsUpdateDelete");

  });
});