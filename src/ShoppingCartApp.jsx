import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./components/NavbarComponent";
import { ProductsPage } from "./pages/ProductsPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { ProductsProvider } from "./context/ProductsProvider";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";

export const ShoppingCartApp = () => {
  return (
    <>
      <ProductsProvider>
        <ShoppingCartProvider>
          <NavbarComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<ProductsPage></ProductsPage>}></Route>
              <Route
                path="/shopping-cart"
                element={<ShoppingCartPage></ShoppingCartPage>}
              ></Route>
              <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
          </div>
        </ShoppingCartProvider>
      </ProductsProvider>
    </>
  );
};
