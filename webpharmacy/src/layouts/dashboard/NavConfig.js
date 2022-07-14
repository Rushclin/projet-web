// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Statistique",
    path: "/dashboard",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Pofile",
    path: "/profile",
    icon: getIcon("iconoir:user-circle-alt"),
  }, 

  {
    title: "Gerer medicaments",
    path: "/medicament",
    icon: getIcon("fontisto:drug-pack"),
  },
];

export default navConfig;
