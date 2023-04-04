import { ThemeProvider } from "styled-components";
import MyRoutes from "./routes";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./style/theme";
import Toggle from "./components/ui/Toggle";
import { ThemeContext } from "./Context";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    setTheme(localStorage.getItem('theme')==='light'? darkTheme: lightTheme );
  }, []);
  return (
    <ThemeProvider theme={theme} >
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Toggle/>
        <MyRoutes/>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
