import React from "react";
import PropTypes from "prop-types";
import { Modal, Sheet, ModalClose } from "@mui/joy";
const MobileFilterWrapper = (props) => {
  const { openMobile, onClose, children } = props;
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={openMobile}
      onClose={() => onClose(false)}
      sx={{
        display: { lg: "none", xs: "flex" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          width: "90%",
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
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
        {children}
      </Sheet>
    </Modal>
  );
};

MobileFilterWrapper.propTypes = {};

export default MobileFilterWrapper;
