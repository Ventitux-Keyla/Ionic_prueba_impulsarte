import image1 from "../../assets/img/1.jpg"
import image2 from "../../assets/img/2.jpg"


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
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={image1} class="d-block w-100" />
                    <button>Leer Mas</button>
                </div>
                <div class="carousel-item">
                    <img src={image2} class="d-block w-100" />
                    <button type="button" class="btn" style={{float: "right", zIndex: "10px"}}>Siguenos</button>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}