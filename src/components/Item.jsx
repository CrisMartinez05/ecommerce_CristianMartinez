import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


export const Item = ({ product }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={product.image}/>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <br />
      <Card.Title>
        <span>$ </span>
        {product.price}
      </Card.Title>
    </Card.Body>
    <div className="boton">
      <Link to={`/item/${product.id}`}>
        <Button variant="dark">Ver Detalle</Button>
      </Link>
    </div>
    <br />
  </Card>
);
