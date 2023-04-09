import { ThemeProvider } from "styled-components";
import MyRoutes from "./routes";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./style/theme";
import Toggle from "./components/ui/Toggle";
import { LangContext, ThemeContext } from "./Context";
import Nav from "./components/views/Nav";
import Footer from "./components/views/Footer";
import { GlobalStyle } from "./style/global";
import i18next from "i18next";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [lang, setLang] = useState(i18next.language);
  useEffect(() => {
    setTheme(localStorage.getItem('theme')==='light'? darkTheme: lightTheme );
  }, []);
  return (
    <ThemeProvider theme={theme} >
      <ThemeContext.Provider value={[theme, setTheme]}>
        <LangContext.Provider value={[lang,setLang]}>
          <GlobalStyle {...{lang}}/>
          <Toggle/>
          <Nav/>
          <MyRoutes/>
          <Footer/>
        </LangContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
