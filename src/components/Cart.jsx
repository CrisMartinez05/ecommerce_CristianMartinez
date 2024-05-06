import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { CartContext } from "../contexts/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);

  const { items, clearCart, removeItem } = useContext(CartContext);

  const total = () => items.reduce((acc, i) => acc + i.quantity * i.price, 0);

  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
        }
      })
      .finally(() => {
        clearCart();
        setValues(initialValues);
      });
  };

  const handleClear = () => clearCart();
  const handleRemove = (id) => removeItem(id);

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Detalle</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
      </Table>

      {items.map((i) => {
        return (
          <Table striped bordered hover key={i.title}>
            <tbody>
              <tr>
                <td>{i.title}</td>
                <td>{i.quantity}</td>
                <td>{i.price}</td>
                <td onClick={() => handleRemove(i.id)}>X</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
      <div>Total: {total()}</div>
      <br />
      <Button variant="dark" type="button" onClick={handleClear}>
        Vaciar Carrito
      </Button>
      <br />
      <hr />
      {items?.length > 0 && (
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="Nombre y Apellido"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Celular"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </Col>
          </Row>
            <br />
          <Row>
            <Col>
              <Form.Control
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <hr />
          <div className="d-flex">
          <Button variant="dark" type="button" onClick={handleSubmit}>
            Enviar
          </Button>
          </div>
        </Form>
      )}
    </Container>
  );
};
