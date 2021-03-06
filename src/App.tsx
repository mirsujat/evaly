import React, {useState} from "react";
import { useQuery } from "react-query";
import { useFetchData } from "./Utility/useFetchData";

//Components
import Item from "./Components/Item/Item";
import Cart from "./Components/Cart/Cart";
import { Drawer, Badge, LinearProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//Styles
import { Wrapper, StyledButton } from "./App.styles";



//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


// const getProducts = async (): Promise<CartItemType[]> =>  
//   await (await fetch("https://fakestoreapi.com/products")).json();


const App = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const {data, isLoading, isError, error} = useFetchData();

  const getTotalItems = (items: CartItemType[]) =>
  items.reduce((ack:number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prevState => {
      //1. Is item already in the cart
      const isItemInCart = prevState.find(item => item.id === clickedItem.id );

      if(isItemInCart){
        return prevState.map( item => 
          item.id === clickedItem.id 
          ? {...item, amount: item.amount + 1 }
          : item
          );
      }

      //2. First time the item is added
      return [ ...prevState, { ...clickedItem, amount: 1 } ]

    })
  };
  
  const handleRemoveFromCart = (id: number) =>{
    setCartItems(prevState =>(
      prevState.reduce((ack, item) =>{
        if(item.id === id){
          //remove item from cart if item.amount === 1
          // return ack will return undefined which is false
          if(item.amount === 1) return ack; 
          return [ ...ack, { ...item, amount: item.amount - 1 } ];
        }else{
          return [  ...ack, item ];
        }

      }, [] as CartItemType[])
    ))
  }; 

  if(isLoading) return <LinearProgress data-testid="loading"/>;
  if(isError) return <div data-testid="error">Something went wrong... </div>;

  let content = null;
  if(data){
    content = data.map(item => (
            <Grid item key={item.id} xs={12} sm={3} data-testid="product"> 
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
        ))
  }

  return (
    <Wrapper data-testid="app-wrapper">

      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
        cartItems={cartItems} 
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)} data-testid="cart-icon">
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon></AddShoppingCartIcon>
        </Badge>
      </StyledButton>

      <Grid container spacing={3} data-testid="content" >
        { content }
      </Grid>
    </Wrapper>
  );
}

export default App;
