import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import App from './App';

test('renders app component', () => {
  const { getByTestId } = render(<App />);
  const appWrapper = getByTestId("app-wrapper");
  
  expect(appWrapper).toBeInTheDocument();
});
