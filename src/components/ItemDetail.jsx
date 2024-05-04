import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
  return (
    <Container className="mt-4">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title>
            <span>$ </span>
            {product.price}
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="h5">
            <span>Stock: </span>
            {product.stock}
            <span> un.</span>
          </Card.Text>
          <ItemCount/>
        </Card.Body>
        <div className="boton">
          <Link to={`/`}>
            <Button variant="dark">Volver</Button>
          </Link>
        </div>
      </Card>
    </Container>
  );
};
