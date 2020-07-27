import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

const ProductsProvider = (props) => {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    const getProducts = async () => {

      let urlExt = '';
      filter !== 'Todos'
        ? urlExt = `?filter=${filter}`
        : urlExt = ``;

      const url = `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles${urlExt}`;
      const products = await axios.get(url);
      setProducts(products.data)
    }
    getProducts();
  }, [filter])

  return (
    <ProductsContext.Provider
      value={{
        products,
        setFilter
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;

