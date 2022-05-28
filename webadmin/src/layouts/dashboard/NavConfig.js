// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Tableau de bord",
    path: "/dashboard",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Mes medicaments",
    path: "/medicaments",
    icon: getIcon("fontisto:drug-pack"),
  },
];

export default navConfig;
