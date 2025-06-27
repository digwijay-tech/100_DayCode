import React, { useEffect, useState } from "react";
import axios from "axios";
const useFetchProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/product.json")
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data.products);
      })
      .catch((error) => console.error(error));
  }, []);
  return products;
};

export default useFetchProduct;

