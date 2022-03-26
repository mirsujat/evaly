import React from 'react';
import Button from '@mui/material/Button';
//Types
import { CartItemType } from "../../App";
//Styles
import { Wrapper } from "./Item.styles";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const truncateString = (str: string, n: number) => {
  if (str.length > n) {
    return str.substring(0, n) + "...";
  } else {
    return str;
  }
}

const Item: React.FC<Props> = ({item, handleAddToCart}) =>(
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h4 className="title">{item.title}</h4>
            <p className="trancate">{ truncateString(item.description, 100) }</p>
            <h4 className="price">$ {item.price}</h4>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
);

export default Item;