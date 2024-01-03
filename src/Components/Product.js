import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/Actions/CartAction";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height="5%" width="5%" />
);
const url = "https://fakestoreapi.com/products";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      })

      .catch((error) => {
        console.error(error.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading type="spin" color="blue" />;
  }
  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  const cards = products.map((product) => (
    <Card key={product.id} sx={{ maxWidth: 384, minHeight: "80px" }}>
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
      <CardActions>
        <Button size="small" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  ));
  return <>{cards}</>;
};

export default Product;
