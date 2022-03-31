
import { render, screen, act, waitFor } from '@testing-library/react';
import App from './App';
import { useFetchData } from "./Utility/useFetchData";

import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const products =[{
  id: 1,
  category: "products",
  description: "This is description",
  image: "",
  price: 12,
  title: "this is title",
  amount: 1
}];

const mockUseProduct = useFetchData as jest.Mock<any>;

jest.mock("./Utility/useFetchData");



 describe("render app without error",  () => {
   beforeEach(() => {
    mockUseProduct.mockImplementation(() => ({}));
   });

   describe("render app", () =>{
    it("render app", () =>{
      const { getByTestId } = render( <App />); 
      expect( getByTestId("content") ).toBeInTheDocument();
    });
  })
   describe("while loading..", async() =>{
     it("render loader component", () =>{
      mockUseProduct.mockImplementation(() =>({
         isLoading: true,
       }));
       const { getByTestId } = render( <App />); 
       expect( getByTestId("loading") ).toBeInTheDocument();
     });
   });

   describe("with an error..", () =>{
     it("render an error component", () =>{
      mockUseProduct.mockImplementation(() =>({
        isLoading: false,
        isError: true
      }));
      const { getByTestId } = render( <App />); 
      expect( getByTestId("error") ).toBeInTheDocument();
     });
   });

   describe("render with data",  async () =>{
     it("render with data", () =>{ 
       mockUseProduct.mockImplementation(() =>({
      isLoading: false,
      isError: false,
      data: product
    }));
     render( <App />); });
    const product = await waitFor(() => screen.queryByTestId("product"));
    expect( product ).toBeInTheDocument();
   });

 });
  


