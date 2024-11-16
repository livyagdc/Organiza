import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PrivateRoute from "@/components/PrivateRoute";
import Resumo from "@/components/resume/Resumo";


export default function Cashflow() {
    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    );
}