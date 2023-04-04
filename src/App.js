import { ThemeProvider } from "styled-components";
import MyRoutes from "./routes";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./style/theme";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    setTheme(localStorage.getItem('theme')==='light'? darkTheme: lightTheme );
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <MyRoutes/>
    </ThemeProvider>
  );
}

export default App;
