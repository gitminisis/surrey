import React from "react";
import Footer from "../Footer";
import AppBar from "../AppBar";
import { Box, Container } from "@mui/material";
import SiteLayout from "../../templates/SiteLayout";
import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar {...SiteLayout} />

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error) => {
          // You can also log the error to an error reporting service like AppSignal
          // logErrorToMyService(error, errorInfo);
          console.error(error);
        }}
      >
        <LayoutChildren child={children} />
      </ErrorBoundary>
      <Footer {...SiteLayout} />
    </>
  );
};

const LayoutChildren = ({ child }) => {
  return <Box>{child}</Box>;
};

const ErrorFallback = ({ error }) => (
  <div style={{ height: "100vh", paddingTop: "40vh" }}>
    <p>Something went wrong 😭</p>

    {error.message && <span>Here's the error: {error.message}</span>}
  </div>
);
withErrorBoundary(LayoutChildren, {
  FallbackComponent: () => <span>Oh no :(</span>,
});
export default Layout;
