import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


export const Item = ({ item }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={item.image}/>
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <br />
      <Card.Title>
        <span>$ </span>
        {item.price}
      </Card.Title>
    </Card.Body>
    <div className="boton">
      <Link to={`/item/${item.id}`}>
        <Button variant="dark">Ver Detalle</Button>
      </Link>
    </div>
    <br />
  </Card>
);
