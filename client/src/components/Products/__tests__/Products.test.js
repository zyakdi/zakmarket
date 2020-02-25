import React from 'react';
import Products from '../Products';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";



describe('Fetch products', () => {
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

  test("shows a list of products", async () => {
    const fakeResponse = [
      {
        "idProduct": 0,
        "name": "Macbook Pro 13 inches",
        "price": 1100,
        "type": "computer",
        "details": "Manufactured in 2019, Qwerty keyboard, touchbar"
      },
      {
        "idProduct": 1,
        "name": "Benjamin Franklin by Walter Isaacson",
        "price": 15.5,
        "type": "book",
        "details": "Paperback, 586 pages, very nice book"
      },
      {
        "idProduct": 2,
        "name": "Skateboard 8 inches",
        "price": 80,
        "type": "Skateboard",
        "details": "Damaged grip tape, spitfire wheels and Venture trucks"
      }
    ];

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse)
      };
      return Promise.resolve(fetchResponse);
    });

    await act(async () => {
      render(<Products />, container);
    });

    expect(container.querySelectorAll("div.flexItem")[0]).toBeDefined();
    expect(container.querySelectorAll("div.flexItem")[1]).toBeDefined();
    expect(container.querySelectorAll("div.flexItem")[2]).toBeDefined();
    expect(container.querySelectorAll("div.flexItem").length).toEqual(3);

    window.fetch.mockRestore();
  });

});