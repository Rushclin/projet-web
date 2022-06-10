import { Container, Grid } from "@mui/material";
import Page from "../../components/Page";
import AppWidget from "./Widgets/AppWidget";

const Dashboard = () => {
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
              total={10}
              icon={"lucide:users"}
            />
          </Grid>
          <Grid item md={3}>
            <AppWidget
              title="Total hopitaux"
              total={21}
              color="warning"
              icon={"icon-park-twotone:hospital-three"}
            />
          </Grid>
          <Grid item md={3}>
            <AppWidget
              title="Total campagnes"
              total={12}
              color="success"
              icon={"fa6-regular:hospital"}
            />
          </Grid>
          <Grid item md={3}>
            <AppWidget
              title="Total pharmacies"
              total={5}
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
