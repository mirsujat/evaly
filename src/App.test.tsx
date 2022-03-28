import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('renders app component', () => {
  const { getByTestId } = render(<App />);
  const appWrapper = getByTestId("app-wrapper");
  
  expect(appWrapper).toBeInTheDocument();
});
function expect(appWrapper: any) {
  throw new Error('Function not implemented.');
}

