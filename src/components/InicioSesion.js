import React, { useState } from 'react';
import './InicioSesion.css';
import fetch from 'node-fetch';
import history from './../services/history';

function InicioSesion() {

    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    function handleLogin() {
        fetch('http://191.92.224.11:25565/signin', 
            {
                method: 'post',
                mode: 'no-cors',
                body: { email, password },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', "Access-Control-Allow-Origin": "*" },
            }
        )
            .then( (res_raw)=>{
                const res = res_raw.json();
                console.log(res.err);
                console.log(res.message);
                if (res.status === 200){
                    history.push('/')
                    console.log('siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
                }
                
                console.log('noooooooooooooooooooooooooooooooo')
                history.push('/login')
            } )
            .catch(err => { throw err });
}

return (
    <div class="h-100 my-4">
        <div class="row">
            <div class="col-md-10 d-flex flex-wrap align-middle p-4">
                <h1 class="align-self-center mx-auto my-2">Iniciar Sesión</h1>
                <input type="text" id="username" class="form-control border-bottom my-4" placeholder="Correo, numero o usuario" onChange={(e) => setEmail(e.target.value)} />

                <input type="text" id="password" class="form-control border-bottom my-4" placeholder="Contraseña" onChange={(e) => setPass(e.target.value)} />

                <button class="btn bg-success text-blanco align-self-end btn-lg ml-auto my-4" onClick={handleLogin}>Iniciar</button>
            </div>
        </div>
    </div>
);
}

export default InicioSesion;
