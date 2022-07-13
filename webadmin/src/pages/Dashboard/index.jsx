import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";
import AppWidget from "./Widgets/AppWidget";
import ReactApexChart from 'react-apexcharts';

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
  const [series, setSeries] = useState([{
    name: 'Nombres',
    /* data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2] */
    data: []
  }]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },

    xaxis: {
      /*       categories: ["Janvier des janvier de chez nous", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
       */
      catgories: [],
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val;
        }
      }

    },
    title: {
      text: 'Repartition des medicaments dans les pharmacies',
      floating: true,
      offsetY: 490,
      align: 'center',
      style: {
        color: '#444'
      }
    }
  })

  const testUser = () => {
    if (!user) {
      navigate("/")
    } else {
      console.log("Authentifie")
    }
  }

  // Decompter le nombre de pharmacie
  const getNbrPharmacie = () => {
    const allPharmacie = []
    const allMedocs = []
    axios
      .get("https://hanniel-api.herokuapp.com/admin/all/pharmacy", {
        userId: user.userId,
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        response.data.message.map((e) => {
          const data = e
          allPharmacie.push(data.name)
          allMedocs.push(data.quantiteMedicament)
        })
        setSeries(
          [{
            name: 'Nombres',
            /* data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2] */
            data: allMedocs
          }]
        )

        setOptions(
          {
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 5,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val;
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },

            xaxis: {
              /*       categories: ["Janvier des janvier de chez nous", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               */
              categories: allPharmacie,
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val;
                }
              }

            },
            title: {
              text: 'Repartition des medicaments dans les pharmacies',
              floating: true,
              offsetY: 490,
              align: 'center',
              style: {
                color: '#444'
              }
            }
          }
        )

        //setListePharmacie([...listePharmacie, listePharmacie.push(response.data.message.name)])
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
        <Grid mt={3}>
          <Box>
            {/* <Typography>Ici les stats</Typography> */}
            <ReactApexChart options={options} series={series} type="bar" height={510} />
          </Box>
        </Grid>
      </Container>
    </Page>);
};
export default Dashboard;
