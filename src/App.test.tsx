
import { render, screen, act, waitFor } from '@testing-library/react';
import App from './App';
import { useFetchData } from "./Utility/useFetchData";

import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();



jest.mock("./Utility/useFetchData", () => ({
  useFetchData: jest.fn(),
}));


 describe("render app without error",  () => {
   beforeEach(() => {
     useFetchData.mockImplementation(() => ({}));
   });

   describe("while loading..", () =>{
     it("render loader", () =>{
       useFetchData.mockImplementation(() =>({
         isLoading: true,
       }));

       const { findByTestId } = render(
         <QueryClientProvider client={client}><App /></QueryClientProvider>
      
       ); 

       expect( findByTestId("loading") ).toBeTruthy();
     });
   });

   describe("with an error..", () =>{
     it("with error", () =>{})
   });

   describe("render with data", () =>{
     it("render with data", () =>{})
   })

 });
  



