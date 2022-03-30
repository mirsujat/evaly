import { useQuery } from "react-query";

const getProducts = async () =>  
  await (await fetch("/api")).json();

  export const useFetchData = () => {
      const { data, error, isLoading } = useQuery("products", getProducts );
    
      return {  data, error, isLoading };
  }

