import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import AppFrog from './AppFrog'; // si no lo confunde con .json
import Login from './components/Formularios/Login';
import Registro from './components/Formularios/Registro';
import FrogCard from './components/Formularios/FrogCard';
import ShoppingCart from './components/Shop/ShoppingCart';
//import Contacto from './components/Formularios/Contacto';
//import Trabajo from './components/Trabajo/Trabajo';
import {saveUsers, loginUser} from './services'

const handleSubmit = (data) => {
    saveUsers(data)
}

const handleLogin = (data) => {
  loginUser(data)
}

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<AppFrog />} />
      <Route exact path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route exact path="/registro" element={<Registro handleSubmit={handleSubmit} />} />
      <Route exact path="/frogcard" element={<FrogCard />} />
      <Route exact path="/envios" element={<ShoppingCart />} />
      {/* <Route exact path="/contacto" element={<Contacto />} /> */}
      {/* <Route exact path="/trabajo" element={<Trabajo />} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);