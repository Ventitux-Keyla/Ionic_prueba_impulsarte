import imagenImpulsarte from "../assets/img/logo_impulsarte.png"


export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top"  style={{backgroundColor: "#00226D", display: "block"}} id="navbarSupportedContent">
             <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href={"/"}>
                            <img src={imagenImpulsarte} alt="" href={"/"} />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href={"/conocenos"}>Conocenos</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href={"/solidario"}>Crédito Solidario</a></li>
                            <li><a class="dropdown-item" href={"/inidividual"}>Crédito Individual</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href={"/ubicanos"}>Ubicanos</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href={"/acceso"}>Soy Cliente</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}