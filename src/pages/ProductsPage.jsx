import { useContext } from "react";
import { ProductCardComponent } from "../components/ProductCardComponent";
import { ProductsContext } from "../context/ProductsContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export const ProductsPage = () => {
  const { products } = useContext(ProductsContext);
  const { addProduct, removeProduct } = useContext(ShoppingCartContext);

  return (
    <>
      <h1>Products</h1>
      <hr />
      <div className="products-container">
        {products.map((prod) => (
          <ProductCardComponent
            key={prod.id}
            id={prod.id}
            image={prod.image}
            title={prod.title}
            description={prod.description}
            price={"$" + prod.price}
            handlerAdd={() => addProduct(prod)}
            handlerRemove={() => removeProduct(prod.id)}
          />
        ))}
      </div>
    </>
  );
};
