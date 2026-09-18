import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../utils/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
        <Analytics />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
