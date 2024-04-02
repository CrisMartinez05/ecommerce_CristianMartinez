import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";

import data from "../data/products.json";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Container className="mt-4">
      <ItemList products={products}/>
    </Container>
  );
};
