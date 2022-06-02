// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Pharmacies",
    path: "/pharmacies",
    icon: getIcon("fontisto:drug-pack"),
  },
  {
    title: "Hopitaux",
    path: "/hopital",
    icon: getIcon("fontisto:drug-pack"),
  },
  {
    title: "Patients",
    path: "/patients",
    icon: getIcon("fontisto:drug-pack"),
  },

  {
    title: "Campagnes",
    path: "/campagnes",
    icon: getIcon("fontisto:drug-pack"),
  },

  {
    title: "Medicament",
    path: "/medicaments",
    icon: getIcon("fontisto:drug-pack"),
  },
];

export default navConfig;
