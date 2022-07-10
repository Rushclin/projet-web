// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";
import { AuthContextProvider } from "./context/userContext";
import { ConfirmProvider } from "material-ui-confirm";
/* import { BaseOptionChartStyle } from "./components/chart/BaseOptionChart"; */

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ConfirmProvider>
    <AuthContextProvider>
    <ThemeProvider>
      <ScrollToTop />
      {/*       <BaseOptionChartStyle /> */}
      <Router />
    </ThemeProvider>
    </AuthContextProvider>
    </ConfirmProvider>
  );
}
