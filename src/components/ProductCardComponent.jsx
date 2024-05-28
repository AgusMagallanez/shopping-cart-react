import { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "./ProductCardComponent.css";

export const ProductCardComponent = ({
  id,
  image,
  title,
  description,
  price,
  handlerAdd,
  handlerRemove,
}) => {
  const { shoppingList } = useContext(ShoppingCartContext);
  const [added, setAdded] = useState(false);

  const addProduct = () => {
    handlerAdd();
    setAdded(true);
  };

  const removeProduct = () => {
    handlerRemove();
    setAdded(false);
  };

  const checkAdded = () => {
    const boolean = shoppingList.some((product) => product.id == id);
    setAdded(boolean);
  };

  useEffect(() => {
    checkAdded();
  }, []);

  return (
    <div className="card-container">
      <img src={image} alt={title} className="card-img" />
      <div className="card-info">
        <h3 className="card-info__title">{title}</h3>
        <p className="card-info__description">{description}</p>
        <p className="card-info__price">{price}</p>
      </div>
      {added ? (
        <button type="button" className="remove" onClick={removeProduct}>
          Remove
        </button>
      ) : (
        <button type="button" className="add" onClick={addProduct}>
          Add to cart
        </button>
      )}
    </div>
  );
};
