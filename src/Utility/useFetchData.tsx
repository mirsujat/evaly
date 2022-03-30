import { useQuery } from "react-query";

const getProducts = async () =>  
  await (await fetch("https://fakestoreapi.com/products")).json();

  export const useFetchData = () => {
      const { data, error, isLoading } = useQuery("products", getProducts );
    
      return {  data, error, isLoading };
  }

