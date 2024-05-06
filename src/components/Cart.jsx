import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import Table from "react-bootstrap/Table";

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
      <button type="button" onClick={handleClear}>
        Vaciar Carrito
      </button>
      <br />
      <hr />
      {items?.length > 0 && (
        <form>
          <label>Nombre</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>Celular</label>
          <input
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      )}
    </Container>
  );
};
