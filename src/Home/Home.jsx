import "./Home.css"

import basedatos from "../utils/basedatos.json"


export function Home(){

 console.log(basedatos[0])
    return(// zona de renderizado
        <>
        <section className="container mt-5">
            <h3>Servicios a un clic</h3>
       
            <div className="row">
                <div className="col-12 col-md-6">
                <h2 className="text-muted">Hola <span className="fuente"> {basedatos[8].nombreUsuario}</span></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur perspiciatis inventore necessitatibus totam ipsa laudantium alias natus repudiandae asperiores nostrum distinctio quae ipsam hic, exercitationem aspernatur esse. Rem quo laborum ab possimus dolor nulla tempore quis nihil doloremque quisquam. Temporibus animi nulla impedit quis quod praesentium ad repellat, eaque suscipit!</p>
                </div>
                <div className="col-12 col-md-6">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Tu grupo familiar </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="row">

                    <div className="col-12 col-md-2 mt-5">
                         <i class="bi bi-person-vcard-fill fs-1 fuente "></i>                                             
                    </div>

                    <div className="col-12 col-md-10 mt5">
                       <br /> <br /> <br />
                       <p>Médico de Familia: {basedatos[8].medicoDeFamilia}</p>
                    </div>

                    <div className="col-12 col-md-2 mt-4">
                    <i class="bi bi-person-arms-up"></i>                                           
                    </div>
                        <br />
                    <div className="col-12 col-md-10 mt-2">
                       <br /> 
                       <p>Grupo de ingreso: {basedatos[8].grupoDeIngreso}</p>
                    </div>

                    <div className="col-12 col-md-2 mt-2">
                    <i class="bi bi-person-circle"></i>                                          
                    </div>

                    <div className="col-12 col-md-10 mt-2">
                       <p>IPS: {basedatos[8].ips}</p>
                    </div>


                <div className="row">
                <div className="col-12 col-md-2 mt-4">
                <i class="bi bi-person-arms-up"></i>                                             
                    </div>
                       
                   <div className="col-12 col-md-10 mt2">
                       <br />
                       <p>fisiatra</p>
                    </div>


                 </div>

                    

                    
             </div>
               
                
                </div>
            </div>
        </section>
            <hr />
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <h5>Paciente {basedatos[8].nombreUsuario}, estas son tus próximas citas:</h5>
                    </div>
                </div>
            </section>
            <section class="container my-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        basedatos[8].citasMedicas.map(function(cita){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow px-2">
                                        <h3>{cita.especialidad}</h3>
                                        <h4>Fecha: {cita.fecha}</h4>
                                        <h4>{cita.direccion}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}