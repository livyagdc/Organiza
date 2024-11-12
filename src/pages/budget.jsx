import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import PrivateRoute from "@/components/PrivateRoute";


export default function Budget() {
    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <h1>Orçamento</h1>
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    )
}