import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastNotification = (props) => {
  const { show, duration, message, type } = props;
  const [open, setOpen] = React.useState(show);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={duration || 6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={type || "success"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

ToastNotification.propTypes = {
  show: PropTypes.bool,
  duration: PropTypes.number,
  message: PropTypes.string,
  type: PropTypes.string,
};

export default ToastNotification;
