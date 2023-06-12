import buro from "../assets/img/buro.png"


export const Footer = () => {
    return(
        // <footer class="py-5" style={{backgroundColor: "#DC0D83"}}>
        <footer class="py-5">
            <div class="container">
                <div class="row" >
                    <div class="col-6 col-md-3 mb-3">
                        <h5>Informacion de contacto</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                Si usted desea más información de nuestros productos y servicios, o tiene alguna duda o sugerencia, ponemos a su disposición los siguientes medios.
                            </li>
                            <li class="nav-item mb-2">
                                LADA SIN COSTO: 01800 224 684701 (961) 613-67-35
                            </li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-3 mb-2">
                        <h5>Quejas, denuncias y sugerencias</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2">E-mail</li>
                        <li class="nav-item mb-2">lfernandez@invirtiendo.com.mx</li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Ext 118</a></li>
                        <h5>Dudas</h5>
                        <li class="nav-item mb-2">E-mail</li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">smiranda@invirtiendo.com.mx</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Ext 101</a></li>

                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3" >
                        <h5>Sitos de interes</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a target="_blank" href="https://www.impulsarte.com.mx/doc/AVISO_PRIVACIDAD.pdf" class="nav-link p-0 text-muted">Aviso de privacidad</a></li>
                        <li class="nav-item mb-2"><a target="_blank" href="http://www.prodesarrollo.org/" class="nav-link p-0 text-muted">ProDesarrollo</a></li>
                        <li class="nav-item mb-2"><a target="_blank" href="http://www.financierarural.gob.mx/Paginas/FNDIni.aspx" class="nav-link p-0 text-muted">FinRural</a></li>
                        <li class="nav-item mb-2"><a target="_blank" href="http://www.condusef.gob.mx/" class="nav-link p-0 text-muted">Condusef</a></li>
                        <li class="nav-item mb-2"><a target="_blank" href="http://www.nafin.com/portalnf/content/home/home.html" class="nav-link p-0 text-muted">Nacional Financiera</a></li>
                        <li class="nav-item mb-2"><a target="_blank" href="http://www.sat.gob.mx/Paginas/Inicio.aspx" class="nav-link p-0 text-muted">SAT</a></li>
                        <li class="nav-item mb-2">
                            <a target="_blank" href="https://www.impulsarte.com.mx/buro.html" class="nav-link p-0 text-muted">
                                <img src={buro} alt="" srcset="" height={"60px"} />
                            </a>
                        </li>

                        </ul>
                    </div>

                    <div class="col-md-3 offset-md-1 mb-3">
                        <form>
                        <h5>Sucribete para obtener mas información</h5>
                        <p>Ingresa tu nombre y correo</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; Impulsarte para crecer todos los derechos reservados.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                </ul>
                </div>
            </div>
        </footer>

    )
}