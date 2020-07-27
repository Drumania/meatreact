import React, { useState } from 'react';
import "./Form.css";
import axios from 'axios';

const Form = () => {

  const [inputs, setInputs] = useState({
    firstname: '',
    email: '',
    lastname: '',
    phone: ''
  })

  const [send, setSend] = useState(false);

  const getInputs = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendForm = async () => {
      await axios.post('https://5eed24da4cbc340016330f0d.mockapi.io/api/subscribe', { inputs })
      setSend(true);
    }
    sendForm();

  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className="wrap-form">
        <li>
          <label for="name">Nombre *</label>
          <input
            type="text"
            id="name"
            name="firstname"
            onChange={getInputs}
            required
          />
        </li>
        <li>
          <label for="mail">Mail *</label>
          <input
            type="email"
            id="mail"
            name="email"
            onChange={getInputs}
            required
          />
        </li>
        <li>
          <label for="lastname">Apellido</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={getInputs}
          />
        </li>
        <li>
          <label for="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={getInputs}
          />
        </li>
        <li>
          {send === false
            ? <input type="submit" value="Enviar" />
            : <span>Gracias, te contactaremos pronto!</span>
          }
        </li>
      </ul>

    </form>
  );
}

export default Form;