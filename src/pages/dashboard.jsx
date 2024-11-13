// /dashboard
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/NavBar/NavBar"
import PrivateRoute from "@/components/PrivateRoute"

export default function Dashboard() {
    return (
        <PrivateRoute>
            <div className="cont">
            <Navbar />
                <div className="main">
                </div>
            <Footer />
            </div>
        </PrivateRoute>
    )
}