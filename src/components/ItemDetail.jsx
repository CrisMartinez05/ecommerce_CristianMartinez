import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CardFooter } from "react-bootstrap";
import { useContext, useState } from "react";

import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

// export const ItemDetail = ({ item }) => {

//   const add = (quantity) => {
//     console.log(item, quantity);
//   };

//   return (
//     <Container className="mt-4 d-flex">
//       <Card style={{ width: "25rem" }}>
//         <Card.Img variant="top" src={item.image} />
//         <Card.Body>
//           <Card.Title>{item.title}</Card.Title>
//           <Card.Title>
//             <span>$ </span>
//             {item.price}
//           </Card.Title>
//           <Card.Text>{item.description}</Card.Text>
//           <Card.Text className="h5">
//             <span>Stock: </span>
//             {item.stock}
//             <span> un.</span>
//           </Card.Text>
//         </Card.Body>
//           <ItemCount initial={0} stock={item.stock} onAdd={add} />
//           <CardFooter>
//         <div className="boton">
//           <Link to={`/`}>
//             <Button variant="dark">Volver</Button>
//           </Link>
//         </div>
//           </CardFooter>
//       </Card>
//     </Container>
//   );
// };

export const ItemDetail = ({ item }) => {

    

    const {addItem} = useContext(CartContext)
 
    const add = (quantity) => {
     addItem(item, quantity)
    
    }
  
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
          </Card.Body>
          
                <ItemCount initial={0} stock={item.stock} onAdd={add} />
            
            <CardFooter>
          <div className="boton">
            <Link to={`/`}>
              <Button variant="dark">Volver</Button>
            </Link>
          </div>
            </CardFooter>
        </Card>
      </Container>
    );
  };
  