// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";
import { AuthContextProvider } from "./context/userContext";
/* import { BaseOptionChartStyle } from "./components/chart/BaseOptionChart"; */

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AuthContextProvider>
    <ThemeProvider>
      <ScrollToTop />
      {/*       <BaseOptionChartStyle /> */}
      <Router />
    </ThemeProvider>
    </AuthContextProvider>
  );
}
