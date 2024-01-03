import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { CartCard, CartContainer } from "../Styles/StyledComponents";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../Redux/Actions/CartAction";
import { MAX_QUANTITY, MIN_QUANTITY } from "../Constant/Constants";
import "../Styles/Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (product) => {
    dispatch(removeItem(product));
  };
  const updateQuantityhandler = (id, newQuantity) => {
    dispatch(updateQuantity(id, newQuantity));
  };
  const cartValue = cartItems
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);
  const cards = cartItems.map((product) => (
    <Card key={product.id} sx={{ maxWidth: 384, minHeight: "180px" }}>
      <CardMedia
        component="img"
        alt={product.title}
        image={product.image}
        style={{
          borderRadius: "8px",
          width: "370px",
          height: "400px",
          marginBottom: "20px",
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          INR {product.price}
        </Typography>
      </CardContent>
      <Button
        size="contained"
        onClick={() => {
          const newQuantity = Math.max(product.quantity - 1, MIN_QUANTITY);
          updateQuantityhandler(product.id, newQuantity);
        }}
      >
        -
      </Button>
      {product.quantity}
      <Button
        size="contained"
        onClick={() => {
          const newQuantity = Math.min(product.quantity + 1, MAX_QUANTITY);
          updateQuantityhandler(product.id, newQuantity);
        }}
      >
        +
      </Button>
      <CardActions>
        <Button size="small" onClick={() => removeFromCart(product)}>
          Remove from Cart
        </Button>
      </CardActions>
    </Card>
  ));
  return (
    <CartContainer>
      <h1>Cart items</h1>
      <div className="card">
        <div className="cart-items">
          <CartCard style={{ display: "flex" }}>{cards}</CartCard>
        </div>

        <div className="cart-value">
          Total Cart Value:
          <p>{cartValue}</p>
        </div>
      </div>
    </CartContainer>
  );
};

export default Cart;
