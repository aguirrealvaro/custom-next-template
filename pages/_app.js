import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "@/styles";

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
