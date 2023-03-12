import React from "react";
import Footer from "../Footer";
import AppBar from "../AppBar";
import { Box, Container } from "@mui/material";
import SiteLayout from "../../templates/SiteLayout";
import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";
import BackTop from "../BackTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { SnackbarProvider } from "notistack";

const MAX_SNACK = 3;
const Layout = ({ active, children }) => {
  return (
    <SnackbarProvider
      maxSnack={MAX_SNACK}
      variant="success"
      autoHideDuration={2500}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <AppBar active={active} {...SiteLayout} />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error) => {
          // You can also log the error to an error reporting service like AppSignal
          // logErrorToMyService(error, errorInfo);
          console.error(error);
        }}
      >
        <LayoutChildren child={children} />
        <BackTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </BackTop>
      </ErrorBoundary>
      <Footer {...SiteLayout} />
    </SnackbarProvider>
  );
};

const LayoutChildren = ({ child }) => {
  return <Box>{child}</Box>;
};

const ErrorFallback = ({ error }) => (
  <div style={{ height: "100vh", paddingTop: "40vh" }}>
    <p>Something went wrong 🫠</p>

    {error.message && <span>Here's the error: {error.message}</span>}
  </div>
);
withErrorBoundary(LayoutChildren, {
  FallbackComponent: () => <span>Oh no :(</span>,
});
export default Layout;
