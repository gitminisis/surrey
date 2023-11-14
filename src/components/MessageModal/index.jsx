import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Box,
  Button,
  Modal,
  ModalDialog,
  ModalClose,
  Divider,
  Checkbox,
} from "@mui/joy";
const MessageModal = (props) => {
  const { message, show } = props;
  const [open, setOpen] = useState(
    true && !sessionStorage.getItem("hideAnnouncement")
  );
  if (!show) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
      <Modal
        data-aos="fade-down"
        data-aos-delay="600"
        hideBackdrop={true}
        onClose={() => setOpen(false)}
        open={open}
      >
        <ModalDialog
          color="neutral"
          layout="center"
          size="lg"
          variant="plain"
          sx={{ width: "90vw", maxWidth: "700px" }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          <Typography
            component="h2"
            id="close-modal-title"
            level="h3"
            color="primary"
            sx={{ mb: 5, fontWeight: "bold", textAlign: "center" }}
          >
            Surrey Online Heritage Search Announcement
          </Typography>

          <Typography level="h6">{message}</Typography>

          <Divider sx={{ my: 4 }} />

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Checkbox
              onChange={(e) => {
                let check = e.target.checked;
                if (check) {
                  sessionStorage.setItem("hideAnnouncement", true);
                } else {
                  sessionStorage.removeItem("hideAnnouncement");
                }
              }}
              label={
                <Typography level="body1" color="primary">
                  {`Don't show this message again`}
                </Typography>
              }
              variant="outlined"
            />
            <Button
              onClick={(_) => {
                setOpen(false);
              }}
              size="sm"
              sx={{ width: "100px" }}
              type="button"
            >
              Close
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </Box>
  );
};

MessageModal.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default MessageModal;
