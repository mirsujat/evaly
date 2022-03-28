import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import App from './App';


import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

test('renders app component', () => {
  const { queryByTestId  } = render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
 
  );
  const loading = queryByTestId("loading");
  const content = queryByTestId("content");
  expect(loading).toBeInTheDocument();
  
});

