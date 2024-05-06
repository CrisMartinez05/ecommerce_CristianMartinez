import { useState } from "react";
import Button from "react-bootstrap/Button";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="d-flex">
        <Button variant="dark" onClick={decrement}>
          -
        </Button>
        <h4 className="Number">
          <span>{quantity}</span>
        </h4>
        <Button variant="dark" onClick={increment}>
          +
        </Button>
      </div>
      <div className="d-flex">
        <Button
          variant="dark"
          onClick={() => {
            onAdd(quantity);
            setQuantity(initial);
          }}
          disabled={!stock}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
