

function Hero(){
    return (
        <header className="hero-section text-center">
            <div className="container">
                <h1 className="display-4 fw-bold mb-3">ViveTuCiudad: Tu guía de eventos locales</h1>
                <p className="lead mb-4 col-md-8 mx-auto">Encuentra los mejores conciertos, teatro, gastronomía y planes culturales en tu ciudad hoy.</p>
                
                <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                    <button className="btn btn-light rounded-pill px-4 shadow-sm"><i className="bi bi-music-note-beamed me-1"></i> Música</button>
                    <button className="btn btn-light rounded-pill px-4 shadow-sm"><i className="bi bi-masks me-1"></i> Teatro & Arte</button>
                    <button className="btn btn-light rounded-pill px-4 shadow-sm"><i className="bi bi-egg-fried me-1"></i> Gastronomía</button>
                    <button className="btn btn-light rounded-pill px-4 shadow-sm"><i className="bi bi-trophy me-1"></i> Deportes</button>
                    <button className="btn btn-light rounded-pill px-4 shadow-sm"><i className="bi bi-people me-1"></i> Familiares</button>
                </div>
            </div>
        </header>
    )
}

export default Hero;