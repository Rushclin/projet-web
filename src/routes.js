import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import DashboardApp from "./pages/DashboardApp";
import Medicaments from "./pages/Medicaments";
import NouveauMedicament from "./pages/NouveauMedicament";
import CreerCampagne from "./pages/campagne/create";
import ListeCampagne from "./pages/campagne";
import UpdateCampagne from "./pages/campagne/update";
import CreerMedecin from "./pages/medecin/create";
import UpdateMedecin from "./pages/medecin/update";
import ListeMedecin from "./pages/medecin";
import LoginPage from "./pages/Login";
import ShowCampagne from "./pages/medecin/show";
import ShowMedecin from "./pages/medecin/show";


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      /* path: "/", */
      element: <DashboardLayout />,
      children: [
        { path: "dashboard", element: <DashboardApp /> },
        { path: "medicaments", element: <Medicaments /> },
        { path: "medicaments/create", element: <NouveauMedicament /> },
        // Hopital
        { path: "campagne", element: <ListeCampagne /> },
        { path: "campagne/create", element: <CreerCampagne /> },
        { path: "campagne/update", element: <UpdateCampagne /> },
        {path: "campagne/show", element:   <ShowCampagne /> }, 
         // MEDECIN
         { path: "medecin", element: <ListeMedecin /> },
         { path: "medecin/create", element: <CreerMedecin /> },
         { path: "medecin/update", element: <UpdateMedecin /> },
          {path:"medecin/show", element:   <ShowMedecin /> }, 
      ],
    },
    {
      path: "/", element:<LoginPage/>
    }
    // Pour la navigation vers la page d'erreur
    /*  { path: "*", element: <Navigate to="/404" replace /> }, */
  ]);
}
