import React from 'react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';


import App from './App';


import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const server = setupServer(
  rest.get('/https://fakestoreapi.com/products"', (req, res, ctx) => {
    return res(ctx.json({data: 'hello there'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// global.fetch = jest.fn(() => 
//   Promise.resolve({
//     json: () => 
//     Promise.resolve({
//       url: "https://fakestoreapi.com/products",
//       value: "hello"
//     }),
//   })
// );


  test("render loading", async () => {
      render(
      <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
    );
    const content = await screen.queryByTestId('loading');
    expect(content).toBeInTheDocument();
  })



