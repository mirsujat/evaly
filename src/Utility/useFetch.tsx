import { useQuery } from "react-query";


type Props = {
  data: any,
  error: string,
  isLoading: boolean,
  mockImplementation: () => void
}

const getProducts = async () =>  
  await (await fetch("https://fakestoreapi.com/products")).json();

  export const useFetchData = () => {
      const { data, error, isLoading } = useQuery("products", getProducts );
      

      return {  data, error, isLoading };
  }

