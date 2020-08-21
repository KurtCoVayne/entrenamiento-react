

import React from 'react';
import Imagen1 from './1.png'
import Imagen2 from './2.png'


function Inicio() {
    return (
        <div>
            <div class="row">
                <div class="col-md-2 d-flex p-4 justify-content-end">
                    <div class="align-center mr-4">
                        <p class="font-weight-bold">Usuario</p>
                        <p>Nombre</p>
                    </div>
                    <img src="RegistroLogo.png" alt="" srcset="" class="" width="65px" height="65px" />
                </div>
            </div>
            <div class="h-100 my-2">
                <div class="row">
                    <div class="col-md-8 d-flex flex-wrap align-middle p-4 justify-content-around">
                        <img src={Imagen1} alt="" srcset="" class="img-registro w-25" />
                        <button
                            class="btn bg-success text-blanco align-self-end btn-lg my-2 font-weight-bold">Calculador</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 d-flex flex-wrap align-middle p-4 justify-content-around">
                        <img src={Imagen2} alt="" srcset="" class="img-registro w-25" />
                        <button
                            class="btn bg-success text-blanco align-self-end btn-lg my-2 font-weight-bold">Estadisticas</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 d-flex flex-wrap align-middle p-4 justify-content-around">
                        <img src={Imagen1} alt="" srcset="" class="img-registro w-25" />
                        <button
                            class="btn bg-success text-blanco align-self-end btn-lg my-2 font-weight-bold">Consejos</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 d-flex flex-wrap align-middle p-4 justify-content-around">
                        <img src={Imagen2} alt="" srcset="" class="img-registro w-25" />
                        <button
                            class="btn bg-success text-blanco align-self-end btn-lg my-2 font-weight-bold">Ayuda</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
