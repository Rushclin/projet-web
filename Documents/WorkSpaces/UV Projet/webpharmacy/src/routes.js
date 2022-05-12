import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import DashboardApp from "./pages/DashboardApp";
import Medicaments from "./pages/Medicaments";
import NouveauMedicament from "./pages/NouveauMedicament";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardApp /> },
        { path: "medicaments", element: <Medicaments /> },
        { path: "medicaments/create", element: <NouveauMedicament /> },
      ],
    },
    // Pour la navigation vers la page d'erreur
    /*  { path: "*", element: <Navigate to="/404" replace /> }, */
  ]);
}
