// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";
import { AuthContextProvider } from "./context/userContext";

export default function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider>
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </AuthContextProvider>
  );
}
