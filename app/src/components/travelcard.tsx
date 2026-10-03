


function TravelCard({ image, title, description, price }: { image: string; title: string; description: string; price: string }) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body p-4">
                    <h5 className="card-title fw-bold fs-5">{title}</h5>
                    <p className="card-text text-muted">{description}</p>
                    <p className="fw-semibold text-accent mb-0">Precio: {price} COP</p>
                </div>
            </div>
        </div>
    );
}

export default TravelCard;