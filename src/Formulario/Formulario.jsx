import { useState } from "react";



export function Formulario() {

    const[vercedula,modificarCedula]=useState("")
    const[verPassword,modificarPassword]=useState("")

    function procesarFromulario(){}

    return (
      <>
        <section className="container " >
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-6">
              <img
                src="../../src/assets/seguros-sura.png" alt=""className="img-fluid img-12"/>
              <form action="" className="border rounded p-4">
                <h2>Controla Tu Salud</h2>
                <div class="input-group mb-3 mt-3">
                     <span class="input-group-text" id="basic-addon1"><i class="bi bi-card-list"></i> </span>
                     <input type="text"
                      class="form-control" 
                      placeholder="Numero de cedula"
                      id="identificación"

                      />

                      

                  
                </div>

                <div class="input-group mb-3 mt-3">
                  <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-lock2"></i> </span>
                     <input type="text" 
                        class="form-control" 
                        placeholder="Password"
                        id ="constraseña"
                        >
                        
                    </input>
 
                 
                </div>
                <button type="submit"className="btn btn-primary" >Ingresar</button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }