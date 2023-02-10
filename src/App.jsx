import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import GenericPage from "./pages/GenericPage";

import { CssBaseline } from "@mui/material";
import Routing from "./templates/Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { baseTheme } from "./templates/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Loading from "./components/Loading";
import { deepmerge } from "@mui/utils";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from "@mui/material/styles";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";

function App() {
  const theme = baseTheme;
  const joyTheme = extendJoyTheme({ cssVarPrefix: "mui", ...baseTheme });
  const muiTheme = extendMuiTheme(baseTheme);
  let page = document.querySelector("#root").dataset.page;
  if (page === undefined) {
    page = "";
  }
  let template = Routing.filter((e) => page === e.path)[0].template;

  return (
    <CssVarsProvider theme={deepmerge(joyTheme, muiTheme)}>
      <GenericPage template={template} />
      {/* <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {Routing.map(({ path, template }, i) => (
              <Route
                key={i}
                path={path}
                element={<GenericPage template={template} />}
              />
            ))}
          </Routes>
        </Suspense>
      </Router> */}
    </CssVarsProvider>
  );
}

export default App;
