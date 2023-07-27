import image1 from "../../assets/img/1.jpg"
import image2 from "../../assets/img/2.jpg"

//Estilos
import '../ComponentsMainView/Carrusel.css';



export const Carrusel = () => {
    const datos_darrusel = [
        {
            url: "",
            image : image1,
        },
        {
            url: "./assets/img/2.jpg",
            image: image2,
        }
    ];

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" />
                    <button>Leer Mas</button>
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" />
                    <button type="button" className="btn" style={{float: "right", zIndex: "10px"}}>Siguenos</button>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}