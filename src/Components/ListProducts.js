import React, { useContext } from 'react';
import Product from './Product';

import { ProductsContext } from '../Context/ProductsContext';

const ListProducts = () => {

  const { products } = useContext(ProductsContext);

  return (
    <section>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))

      }

    </section>
  );
}

export default ListProducts;