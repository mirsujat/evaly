import React from 'react';
import { render, screen, act } from '@testing-library/react';


import App from './App';


import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();


// global.fetch = jest.fn(() => 
//   Promise.resolve({
//     json: () => 
//     Promise.resolve({
//       url: "http//example.com",
//       value: [{"0": "hello", "2": "World" }]
//     }),
//   })
// );


  test("render app component", async () => {
    const { queryByTestId } =  render(
      <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
    );

    const content = await queryByTestId('content');
    expect(content).toBeInTheDocument();
  })



