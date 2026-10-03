
import Navbar from "../navbar";
import Hero from "../hero";
import Footer from "../footer";

const MainLayout =({children}) =>{
    return(
        <>
            <Navbar />
            <Hero />
            <main className="container my-5">
             {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout;