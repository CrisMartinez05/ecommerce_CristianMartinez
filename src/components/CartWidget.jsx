import cart from "../assets/negro.png"

export const CartWidget = () => {
  return (
    <div id="cart">
      <img src={cart} alt="Cart" width={40}/>
      <span>2</span>
    </div>
  );
};
