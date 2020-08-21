import React, { useState,useEffect } from 'react';
import './InicioSesion.css';
import fetch from 'node-fetch';
import history from '../services/history';

function urlencodeObject(data) {
    let params = new URLSearchParams();
    Object.keys(data).forEach(key => params.append(key, data[key]));
    const encoded = params.toString();
    // console.log(encoded);
    return encoded;
}
export const handleLogin = async data => {
    const { email, password } = data; //RETRIEVE
    const params = { password: password }; //REFORMAT
    if (email !== false)
        params.email = email
    else
        throw "Email and nickname are not false, bad request..."
    // let formData = new FormData();
    // Object.keys(params).forEach((keys) => formData.append(keys, params[keys]))
    const headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin':"*",
        "mode":"no-cors"
        
    });
    let response = await fetch('https://cors-anywhere.herokuapp.com//signin', {
        headers: headers,
        method: "POST",
        body: urlencodeObject(params)
    }).catch(error => console.error("Error:", error));
    return await response.json();
};
function InicioSesion() {

    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [response, setResponse] = useState();
    useEffect(()=>{
        if(!response)return;
        console.log(response)
        if(response.user){
            console.log("wa navegar uwu")
            history.push('/principal')
        }

    },[response])
return (
    <div className="h-100 my-4">
        <div className="row">
            <div className="col-md-10 d-flex flex-wrap align-middle p-4">
                <h1 className="align-self-center mx-auto my-2">Iniciar Sesión</h1>
                <input type="text" id="username" className="form-control border-bottom my-4" placeholder="Correo, numero o usuario" onChange={(e) => setEmail(e.target.value)} />

                <input type="text" id="password" className="form-control border-bottom my-4" placeholder="Contraseña" onChange={(e) => setPass(e.target.value)} />

                <button className="btn bg-success text-blanco align-self-end btn-lg ml-auto my-4" onClick={
                    async e => {
                        let emailRegex = new RegExp(
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        )
                        const data = { email, password }
            
                        
                            if (emailRegex.exec(email) === null) {
                                let tempResponse = {}
                                tempResponse.ok = false
                                tempResponse.statusText =
                                    'El correo no tiene un formato correcto'
                                setResponse(tempResponse)
                                return
                            }
                            const apiResponse = await handleLogin(data)
                        if (!apiResponse) {
                            alert('Error de autentificación','Algo ha salido mal...')
                        } else {
                            setResponse(apiResponse) // IT APPEARS TO BE THAT THIS IS OBSERVABLE, SO I GOT TO USE A UPDATE EFFECT IN A FAR AWAY F.. FUNCTION
                        }
            
                        
                    }
                }>Iniciar</button>
            </div>
        </div>
    </div>
);
}

export default InicioSesion;
