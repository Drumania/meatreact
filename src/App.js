import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/Title";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Title title="Nuestros Artículos" />

        <div className="wrap-products">
          <aside>
            <a href="#!" className="active">
              todos
            </a>
            <a href="#!">productos</a>
            <a href="#!">recetas</a>
            <a href="#!">consejos</a>
          </aside>

          <section>
            <a href="#!" className="product">
              <div className="product-img">&nbsp;</div>
              <h4>Curabitur vulputate placerat tristique nam libero eros</h4>
              <p>
                Malesuada tortor, facilisi vel turpis ullamcorper. Mattis
                egestas mattis nulla pretium. Arcu pretium, tempor
              </p>
            </a>
            <a href="#!" className="product">
              <div className="product-img">&nbsp;</div>
              <h4>Curabitur vulputate placerat tristique nam libero eros</h4>
              <p>
                Malesuada tortor, facilisi vel turpis ullamcorper. Mattis
                egestas mattis nulla pretium. Arcu pretium, tempor
              </p>
            </a>
            <a href="#!" className="product">
              <div className="product-img">&nbsp;</div>
              <h4>Curabitur vulputate placerat tristique nam libero eros</h4>
              <p>
                Malesuada tortor, facilisi vel turpis ullamcorper. Mattis
                egestas mattis nulla pretium. Arcu pretium, tempor
              </p>
            </a>
            <a href="#!" className="product">
              <div className="product-img">&nbsp;</div>
              <h4>Curabitur vulputate placerat tristique nam libero eros</h4>
              <p>
                Malesuada tortor, facilisi vel turpis ullamcorper. Mattis
                egestas mattis nulla pretium. Arcu pretium, tempor
              </p>
            </a>
            <a href="#!" className="product">
              <div className="product-img">&nbsp;</div>
              <h4>Curabitur vulputate placerat tristique nam libero eros</h4>
              <p>
                Malesuada tortor, facilisi vel turpis ullamcorper. Mattis
                egestas mattis nulla pretium. Arcu pretium, tempor
              </p>
            </a>
          </section>
        </div>

        <Title title="Contactános" />

        <form>
          <ul className="wrap-form">
            <li>
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" />
            </li>
            <li>
              <label for="mail">Mail</label>
              <input type="email" id="mail" />
            </li>
            <li>
              <label for="apellido">Apellido</label>
              <input type="text" id="apellido" />
            </li>
            <li>
              <label for="telefono">Teléfono</label>
              <input type="tel" id="telefono" />
            </li>
            <li>
              <input type="submit" value="Enviar" />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default App;
