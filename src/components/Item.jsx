import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';

export const Item = ({ product }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Title>
        <span>$ </span>
        {product.price}
      </Card.Title>
    </Card.Body>
    <Card.Footer>
          <Link to={`/item/${product.id}`}>
          <Button variant="primary">Ver Detalle</Button>
          </Link>          
    </Card.Footer>
   </Card>
  
  
);
