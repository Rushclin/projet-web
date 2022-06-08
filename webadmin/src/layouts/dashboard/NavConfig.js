// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Statistiques",
    path: "/dashboard",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Pharmacies",
    path: "/pharmacies",
    icon: getIcon("iconoir:pharmacy-circled-cross"),
  },
  {
    title: "Hopitaux",
    path: "/hopital",
    icon: getIcon("icon-park-twotone:hospital-three"),
  },
  {
    title: "Patients",
    path: "/patients",
    icon: getIcon("lucide:users"),
  },

  {
    title: "Campagnes",
    path: "/campagnes",
    icon: getIcon("fa6-regular:hospital"),
  },

  {
    title: "Medicaments",
    path: "/medicaments",
    icon: getIcon("fontisto:drug-pack"),
  },
];

export default navConfig;
