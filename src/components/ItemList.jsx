import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex align-items-stretch justify-content-center" style={{flexWrap:'wrap'}}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};
