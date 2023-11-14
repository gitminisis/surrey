import "./App.css";
import React, { Suspense, useEffect } from "react";
import GenericPage from "./pages/GenericPage";

import Routing from "./templates/Routes";
import { baseTheme } from "./templates/themes/default";
import { deepmerge } from "@mui/utils";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from "@mui/material/styles";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const joyTheme = extendJoyTheme({ cssVarPrefix: "mui", ...baseTheme });
  const muiTheme = extendMuiTheme(baseTheme);
  const mergedTheme = {
    ...joyTheme,
    ...muiTheme,
    // You can use your own `deepmerge` function.
    colorSchemes: deepmerge(joyTheme.colorSchemes, muiTheme.colorSchemes),
    typography: {
      ...joyTheme.typography,
      ...muiTheme.typography,
    },
    zIndex: {
      ...joyTheme.zIndex,
      ...muiTheme.zIndex,
    },
  };
  mergedTheme.generateCssVars = (colorScheme) => ({
    css: {
      ...joyTheme.generateCssVars(colorScheme).css,
      ...muiTheme.generateCssVars(colorScheme).css,
    },
    vars: deepmerge(
      joyTheme.generateCssVars(colorScheme).vars,
      muiTheme.generateCssVars(colorScheme).vars
    ),
  });

  let page = document.querySelector("#root").dataset.page;
  if (page === undefined) {
    page = "";
  }
  let template = Routing.filter((e) => page === e.path)[0].template;
  useEffect(() => {
    AOS.init({
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true,
    });
    // AOS.refresh();
  }, []);
  return (
    <CssVarsProvider theme={mergedTheme}>
      <GenericPage template={template} />

      {/* <Provider store={store}>
        <BrowserRouter basename="/admin">
          <AppDashboard />
        </BrowserRouter>
      </Provider> */}
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
