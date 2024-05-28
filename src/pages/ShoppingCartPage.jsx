import Swal from "sweetalert2";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "./ShoppingCartPage.css";
import DeleteIcon from "@mui/icons-material/Delete";

export const ShoppingCartPage = () => {
  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } =
    useContext(ShoppingCartContext);

  const calculateTotal = () => {
    return shoppingList
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const handlerPurchase = () => {
    const productsPurchased = shoppingList
      .map((product) => `${product.title} x ${product.quantity}`)
      .join("\n");
    Swal.fire({
      icon: "success",
      title: "The purchase has been successfully completed.",
      html: `<p> Products: </p> <pre>${productsPurchased}</pre>`,
    });
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((prod) => (
            <tr key={prod.id}>
              <th scope="row">{prod.title}</th>
              <td>{prod.price}</td>
              <td>
                <div className="btn-group-vertical w-100 h-100">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => decrementQuantity(prod.id)}
                  >
                    -
                  </button>
                  <button className="btn btn-primary btn-sm">
                    {prod.quantity}
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => incrementQuantity(prod.id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeProduct(prod.id)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <th>
              <b>TOTAL: </b>
            </th>
            <td></td>
            <td></td>
            <td>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-1">
        <button
          className="btn btn-success confirm-button"
          type="button"
          onClick={handlerPurchase}
        >
          Confirm
        </button>
      </div>
    </>
  );
};
