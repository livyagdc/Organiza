// /initial
import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"
import PrivateRoute from "@/components/PrivateRoute"

export default function Initial() {
    return (
        <PrivateRoute>
            <div className="main">
                <Navbar/>
            </div>
            <Footer />
        </PrivateRoute>
    )
}