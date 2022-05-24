import { Login } from "@mui/icons-material";
import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import DashboardApp from "./pages/DashboardApp";
import LoginPage from "./pages/Login";
import ListeMedicament from "./pages/Medicaments";
import NouveauMedicament from "./pages/Medicaments/create";
import UpdateMedicament from "./pages/Medicaments/update";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardApp /> },
        { path: "medicament", element: <ListeMedicament /> },
        { path: "medicament/create", element: <NouveauMedicament /> },
        { path: "medicament/update", element: <UpdateMedicament /> },
      ],
    },
    { path: "login", element: <LoginPage /> },
    // Pour la navigation vers la page d'erreur
    /*  { path: "*", element: <Navigate to="/404" replace /> }, */
  ]);
}
