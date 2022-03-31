import { useQuery } from "react-query";

type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>  
  await (await fetch("https://fakestoreapi.com/products")).json();

  export const useFetchData = () => {
      const { data, isError, error, isLoading } = useQuery<CartItemType[]>("products", getProducts );
    
      return {  data, isError, error, isLoading };
  }

