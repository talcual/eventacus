
import { NavLink } from "react-router";
import TravelCard from "../../components/travelcard";

const travelData = [
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Viaje a la Playa del Carmen",
        description: "Disfruta de las hermosas playas y la vibrante vida nocturna de Playa del Carmen.",
        price: "1,200,000"
    },
    {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Aventura en la Selva Amazónica",
        description: "Explora la biodiversidad de la selva amazónica con guías expertos.",
        price: "2,500,000"
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Tour Gastronómico en Italia",
        description: "Degusta la auténtica cocina italiana en un recorrido por Roma, Florencia y Venecia.",
        price: "3,000,000"
    },
    {
        image: "https://images.unsplash.com/photo-1790274742646-263bd2c8d4b0?q=80&w=462&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Safari en Kenia",
        description: "Vive la experiencia de un safari africano y observa la vida salvaje en su hábitat natural.",
        price: "4,500,000"
    }
];

function HomePage(){
    return (
        <>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold fs-3 m-0">🌟 Destacados del Fin de Semana</h2>
            <NavLink to="/details/1" className="text-decoration-none fw-semibold" style={{color: "var(--primary-color)"}}>Ver todos <i className="bi bi-arrow-right"></i></NavLink>
        </div>

        <div className="row g-4">
            {travelData.map((travel, index) => (
                <TravelCard
                    key={index}
                    image={travel.image}
                    title={travel.title}
                    description={travel.description}
                    price={travel.price}
                />
            ))}
        </div>

        <div className="my-5 pt-4">
            <h3 className="fw-bold mb-3"><i className="bi bi-map me-2"></i> Eventos cerca de ti</h3>
            <div className="map-placeholder border shadow-sm">
                <div className="text-center p-4">
                    <i className="bi bi-geo-alt-fill text-accent display-4 mb-2"></i>
                    <p className="text-muted m-0 fw-semibold">Aquí se cargará el mapa interactivo de eventos en Barranquilla.</p>
                    <small className="text-muted">Integra la API de Google Maps o LeafletJS aquí.</small>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage;