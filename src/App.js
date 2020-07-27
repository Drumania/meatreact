import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Filters from "./Components/Filters";
import ListProducts from "./Components/ListProducts";
import Form from "./Components/Form";

import ProductsProvider from "./Context/ProductsContext";


function App() {
  return (
    <ProductsProvider>
      <Header />

      <div className="container">
        <Title title='Nuestros Artículos' />

        <div className="wrap-products">

          <Filters />

          <ListProducts />

        </div>

        <Title title='Contactános' />

        <Form />

      </div>
    </ProductsProvider>
  );
}

export default App;
