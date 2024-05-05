import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ item }) => {

  const add = (quantity) => {
    console.log(item, quantity);
  };

  return (
    <Container className="mt-4 d-flex">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Title>
            <span>$ </span>
            {item.price}
          </Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className="h5">
            <span>Stock: </span>
            {item.stock}
            <span> un.</span>
          </Card.Text>
          <ItemCount initial={0} stock={item.stock} onAdd={add} />
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
