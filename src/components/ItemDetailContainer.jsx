import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filter = data.find((p) => p.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

  if (!product) return <div>Loading</div>;

  return (
    <Container className="mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title>
            <span>$ </span>
            {product.price}
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/`}>
            <Button variant="primary">Volver</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
