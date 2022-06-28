import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import ListeCampagne from "./pages/Campagne";
import ShowCampagne from "./pages/Campagne/show";
import Dashboard from "./pages/Dashboard";
import ListeHopitaux from "./pages/Hopital";
import CreerHopital from "./pages/Hopital/create";
import ShowHopital from "./pages/Hopital/show";
import UpdateHopital from "./pages/Hopital/update";
import LoginPage from "./pages/Login";
import ListeMedicament from "./pages/Medicament";
import ShowMedicament from "./pages/Medicament/show";
import ListePatient from "./pages/Patient";
import ShowPatient from "./pages/Patient/show";
import ListePharmacie from "./pages/Pharmacies";
import NouvellePharmacie from "./pages/Pharmacies/create";
import ShowPharmacie from "./pages/Pharmacies/show";
import UpdatePharmacie from "./pages/Pharmacies/update";

export default function Router() {
  return useRoutes([
    {
      /* path: "/", */
      element: <DashboardLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        // Pharmacies
        { path: "pharmacies", element: <ListePharmacie /> },
        { path: "pharmacies/create", element: <NouvellePharmacie /> },
        { path: "pharmacies/update", element: <UpdatePharmacie /> },
        { path: "pharmacies/show", element: <ShowPharmacie /> },
        // Hopital
        { path: "hopital", element: <ListeHopitaux /> },
        { path: "hopital/create", element: <CreerHopital /> },
        { path: "hopital/update", element: <UpdateHopital /> },
        { path: "hopital/show", element: <ShowHopital /> },

        // Patient
        { path: "patients", element: <ListePatient /> },
        { path: "patients/show", element: <ShowPatient /> },

        // Campagne
        { path: "campagnes", element: <ListeCampagne /> },
        { path: "campagnes/show", element: <ShowCampagne /> },

        // Medicaments
        { path: "medicaments", element: <ListeMedicament /> },
        { path: "medicaments/show", element: <ShowMedicament /> },
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
