import BudgetAlert from "@/components/BudgetAlert";
import BudgetChart from "@/components/BudgetChart";
import BudgetForm from "@/components/BudgetForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import PrivateRoute from "@/components/PrivateRoute";


export default function Budget() {
    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <h1>Gestão de Orçamento</h1>
                    <BudgetForm />
                    <BudgetChart />
                    <BudgetAlert />

                </div>
                <Footer />
            </div>
        </PrivateRoute>
    )
}