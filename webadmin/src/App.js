// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";
import { AuthContextProvider } from "./context/userContext";
import { ConfirmProvider } from "material-ui-confirm";

export default function App() {
  return (
    <ConfirmProvider>
      <AuthContextProvider>
        <ThemeProvider>
          <ScrollToTop />
          <Router />
        </ThemeProvider>
      </AuthContextProvider>
    </ConfirmProvider>
  );
}
