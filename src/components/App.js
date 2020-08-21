import React from 'react';
import './App.css';
import logoAfiline from './LogoAfiline.png'
import { Link } from "react-router-dom";

function App() {
  return (
    <div class="h-100 my-4">
      <div class="row mt-4">
        <div class="col-md-6 mx-auto d-flex justify-content-center mt-4">
          <img src={logoAfiline} alt="" srcset="" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 mx-auto d-flex justify-content-center flex-wrap align-middle">
          <button class="btn bg-success text-blanco m-2 btn-lg btn-block">
            <Link to="/login">Login</Link>
          </button>
          <button class="btn bg-success text-blanco m-2 btn-lg btn-block">
            <Link to="/register">Registro</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
