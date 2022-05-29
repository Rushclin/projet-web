import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import DashboardApp from "./pages/DashboardApp";
import LoginPage from "./pages/Login";
import Medicaments from "./pages/Medicaments";
import NouveauMedicament from "./pages/NouveauMedicament";
import ListePharmacie from "./pages/Pharmacies";
import NouvellePharmacie from "./pages/Pharmacies/create";
import UpdatePharmacie from "./pages/Pharmacies/update";

export default function Router() {
  return useRoutes([
    {
      /* path: "/", */
      element: <DashboardLayout />,
      children: [
        { path: "dashboard", element: <DashboardApp /> },
        { path: "medicaments", element: <Medicaments /> },
        { path: "medicaments/create", element: <NouveauMedicament /> },
        { path: "pharmacies", element: <ListePharmacie /> },
        { path: "pharmacies/create", element: <NouvellePharmacie /> },
        { path: "pharmacies/update", element: <UpdatePharmacie /> },
      ],
    },
    {
      path: "/",
      element: <LoginPage />,
    },
    // Pour la navigation vers la page d'erreur
    /*  { path: "*", element: <Navigate to="/404" replace /> }, */
  ]);
}
