import Footer from "../Footer";
import AppBar from "../AppBar";
import { Box, Container } from "@mui/material";
import SiteLayout from "../../templates/SiteLayout";
import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";
import BackTop from "../BackTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { SnackbarProvider, useSnackbar } from "notistack";
import Section from "../Section";
import { Button } from "@mui/joy";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { sendErrorReport } from "../../utils/functions";
import MessageModal from "../MessageModal";
const MAX_SNACK = 3;
import announcement from "../../templates/json/announcement/data.json";
const Layout = ({ active, children }) => {
  console.log(SiteLayout);
  return (
    <SnackbarProvider
      maxSnack={MAX_SNACK}
      variant="success"
      autoHideDuration={1500}
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
        <MessageModal
          message={announcement.message}
          show={announcement.status}
        />
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

const ErrorFallback = ({ error }) => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "20vh",
        backgroundColor: "rgb(0,0,0,0.1)",
      }}
    >
      {/* {error.message && <span>Here's the error: {error.message}</span>} */}
      <div style={{ textAlign: "center" }}>
        {" "}
        <WarningAmberIcon sx={{ fontSize: "12rem", color: "secondary.dark" }} />
      </div>
      <Section
        divider={false}
        heading="Oops! Something went wrong ..."
        description="Dear user, we're sorry that you're experiencing difficulties with our website. We would appreciate it if you could take a moment to report this issue to us by clicking on the Report a problem button on the website."
      >
        <Button
          sx={{ width: "100%", maxWidth: "250px", margin: "16px auto" }}
          color="warning"
          onClick={() => {
            let session = document.getElementById("session-id").innerText;
            let body = error.message;
            sendErrorReport(session, body).then((res) => {
              enqueueSnackbar(
                `Your report has been sent. You will be redirected to the home page.`
              );
              setTimeout((_) => {
                window.location = "/";
              }, 5000);
            });
          }}
          size="md"
          variant="solid"
        >
          Report a problem
        </Button>
      </Section>
    </div>
  );
};
withErrorBoundary(LayoutChildren, {
  FallbackComponent: () => <span>Oh no :(</span>,
});
export default Layout;
