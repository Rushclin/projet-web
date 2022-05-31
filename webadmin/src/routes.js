import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import ListeCampagne from "./pages/Campagne";
import ShowCampagne from "./pages/Campagne/show";
import DashboardApp from "./pages/DashboardApp";
import ListeHopitaux from "./pages/Hopital";
import CreerHopital from "./pages/Hopital/create";
import UpdateHopital from "./pages/Hopital/update";
import LoginPage from "./pages/Login";
import Medicaments from "./pages/Medicaments";
import NouveauMedicament from "./pages/NouveauMedicament";
import ListePatient from "./pages/Patient";
import ShowPatient from "./pages/Patient/show";
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
        // Pharmacies
        { path: "pharmacies", element: <ListePharmacie /> },
        { path: "pharmacies/create", element: <NouvellePharmacie /> },
        { path: "pharmacies/update", element: <UpdatePharmacie /> },
        // Hopital
        { path: "hopital", element: <ListeHopitaux /> },
        { path: "hopital/create", element: <CreerHopital /> },
        { path: "hopital/update", element: <UpdateHopital /> },

        // Patient
        { path: "patients", element: <ListePatient /> },
        { path: "patients/show", element: <ShowPatient /> },

        // Campagne
        { path: "campagnes", element: <ListeCampagne /> },
        { path: "campagnes/show", element: <ShowCampagne /> },
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
