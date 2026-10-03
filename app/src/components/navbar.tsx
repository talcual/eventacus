

function Navbar(){

    return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold text-dark fs-4" href="#">ViveTuCiudad</a>
                
                <div className="dropdown me-3 ms-lg-3">
                    <button className="btn btn-light dropdown-toggle fw-semibold" type="button" data-bs-toggle="dropdown">
                        📍 Barranquilla
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-menu-item dropdown-item" href="#">Barranquilla</a></li>
                        <li><a className="dropdown-menu-item dropdown-item" href="#">Medellín</a></li>
                        <li><a className="dropdown-menu-item dropdown-item" href="#">Bogotà</a></li>
                    </ul>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <form className="d-flex mx-auto col-lg-5 my-2 my-lg-0">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0"><i className="bi bi-search"></i></span>
                            <input className="form-control bg-light border-start-0" type="search" placeholder="Buscar conciertos, teatro, gastronomía..." />
                        </div>
                    </form>
                    
                    <ul className="navbar-nav align-items-lg-center">
                        <li className="nav-item"><a className="nav-link fw-semibold px-3" href="#">Explorar</a></li>
                        <li className="nav-item"><a className="nav-link fw-semibold px-3" href="#">Calendario</a></li>
                        <li className="nav-item me-2"><a className="btn btn-primary-custom fw-semibold" href="#">Crear Evento</a></li>
                        <li className="nav-item"><a className="nav-link fw-semibold text-muted" href="#"><i className="bi bi-person-circle fs-5 me-1"></i> Iniciar Sesión</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;