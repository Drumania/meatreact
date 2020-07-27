import React, { useContext, useState } from 'react';
import "./Filters.css";

import { ProductsContext } from '../Context/ProductsContext';


const Filters = () => {

  const { setFilter } = useContext(ProductsContext);


  const [active, setActive] = useState('Todos');


  const handleChange = (e) => {
    setActive(e);
    setFilter(e);
  }

  return (
    <aside>
      <a
        href="#!"
        onClick={() => handleChange('Todos')}
        className={active === "Todos" ? 'active' : null}
      >
        Todos
      </a>
      <a
        href="#!"
        onClick={() => handleChange('Productos')}
        className={active === "Productos" ? 'active' : null}
      >
        Productos
      </a>
      <a
        href="#!"
        onClick={() => handleChange('Recetas')}
        className={active === "Recetas" ? 'active' : null}
      >
        Recetas
      </a>
      <a
        href="#!"
        onClick={() => handleChange('Consejos')}
        className={active === "Consejos" ? 'active' : null}
      >
        Consejos
      </a>
    </aside>
  );
}

export default Filters;