import buro from "../assets/img/buro.png"

// Estilos
import '../assets/css/Footer.css';


export const Footer = () => {
    return(
        // <footer className="py-5" style={{backgroundColor: "#DC0D83"}}>
        <footer className="py-5">
            <div className="contenedor-footer">
                <div className="container contenedor-general-footer">
                    <div className="row container" >
                        <div className="col-6 col-md-3 mb-3">
                            <h5>Informacion de contacto</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    Si usted desea más información de nuestros productos y servicios, o tiene alguna duda o sugerencia, ponemos a su disposición los siguientes medios.
                                </li>
                                <li className="nav-item mb-2">
                                    LADA SIN COSTO: 01800 224 684701 (961) 613-67-35
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-3 mb-2">
                            <h5>Quejas, denuncias y sugerencias</h5>
                            <ul className="nav flex-column">
                            <li className="nav-item mb-2">E-mail</li>
                            <li className="nav-item mb-2">lfernandez@invirtiendo.com.mx</li>
                            <li className="nav-item mb-2">Ext 118</li>
                            <h5>Dudas</h5>
                            <li className="nav-item mb-2">E-mail</li>
                            <li className="nav-item mb-2">smiranda@invirtiendo.com.mx</li>
                            <li className="nav-item mb-2">Ext 101</li>

                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3" >
                            <h5>Sitos de interes</h5>
                            <ul className="nav flex-column">
                            <li className="nav-item mb-2">Aviso de privacidad</li>
                            <li className="nav-item mb-2">ProDesarrollo</li>
                            <li className="nav-item mb-2">FinRural</li>
                            <li className="nav-item mb-2">Condusef</li>
                            <li className="nav-item mb-2">Nacional Financiera</li>
                            <li className="nav-item mb-2">SAT</li>
                            <li className="nav-item mb-2">
                                <a target="_blank" href="https://www.impulsarte.com.mx/buro.html" className="nav-link p-0 text-muted texto-color">
                                    <img src={buro} alt="" srcSet="" height={"60px"} />
                                </a>
                            </li>

                            </ul>
                        </div>

                        <div className="col-md-3 offset-md-1 mb-3">
                            <form>
                            <h5>Sucribete para obtener mas información</h5>
                            <p>Ingresa tu nombre y correo</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; Impulsarte para crecer todos los derechos reservados.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                    </ul>
                    </div>
                </div>
                
            </div>
        </footer>

    )
}