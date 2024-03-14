import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <h3>Vivir Fitness</h3>
      <ul>
        <li>
          <a href="#">Indumentaria</a>
        </li>
        <li>
          <a href="#">Calzado</a>
        </li>
        <li>
          <a href="#">Accesorios</a>
        </li>
      </ul>
      <CartWidget/>
    </>
  );
};
