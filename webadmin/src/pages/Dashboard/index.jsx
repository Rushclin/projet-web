import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";
import AppWidget from "./Widgets/AppWidget";

const Dashboard = () => {
  useEffect(() => {
    getNbrPharmacie();
    getNbrePatient();
    getNbreHopital();
    getNbreCampagne();
    testUser()
  }, []);

  const [nbrPharmacie, setNbrPharmaci] = useState(0);
  const [nbrPatient, setNbrPatient] = useState(0);
  const [nbrHopital, setNbrHopital] = useState(0);
  const [nbrCampagne, setNbrCampagne] = useState(0);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const testUser = () => {
    if (!user) {
      navigate("/")
    } else {
      console.log("Authentifie")
    }
  }

  // Decompter le nombre de pharmacie
  const getNbrPharmacie = () => {
    axios
      .get("https://hanniel-api.herokuapp.com/admin/all/pharmacy", {
        userId: user.userId,
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        setNbrPharmaci(response.data.message.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Decompter le nombre de patient
  const getNbrePatient = () => {
    axios
      .get("https://hanniel-api.herokuapp.com/admin/all/patient", {
        userId: user.userId,
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        setNbrPatient(response.data.message.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Decompter le nombre d'hopitaux
  const getNbreHopital = () => {
    axios
      .get("https://hanniel-api.herokuapp.com/admin/all/hospital", {
        userId: user.userId,
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        setNbrHopital(response.data.message.length);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Decompter le nombre d'hopitaux
  const getNbreCampagne = () => {
    axios
      .get("https://hanniel-api.herokuapp.com/admin/all/campaign", {
        userId: user.userId,
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        setNbrCampagne(response.data.message.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Page title=" Dashboard">
      <Container>
        {
          // Pour afficher les cartes du haut
        }
        <Grid container spacing={3}>
          <Grid item md={3}>
            <AppWidget
              title="Total patients"
              total={nbrPatient}
              icon={"lucide:users"}
            />
          </Grid>
          <Grid item md={3}>
            <AppWidget
              title="Total hopitaux"
              total={nbrHopital}
              color="warning"
              icon={"icon-park-twotone:hospital-three"}
            />
          </Grid>
          <Grid item md={3}>
            <AppWidget
              title="Total campagnes"
              total={nbrCampagne}
              color="success"
              icon={"fa6-regular:hospital"}
            />
          </Grid>
          <Grid item md={3}>
            <AppWidget
              title="Total pharmacies"
              total={nbrPharmacie}
              color="error"
              icon={"iconoir:pharmacy-circled-cross"}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};
export default Dashboard;
