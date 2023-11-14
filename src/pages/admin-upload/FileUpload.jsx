import React, { useState, useCallback } from "react";
import { Button, Box, Grid } from "@mui/material";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import PropTypes from "prop-types";
import "filepond/dist/filepond.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import the Image EXIF Orientation and Image Preview plugins

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);

const FileUpload = ({ hidden }) => {
  const [files, setFiles] = useState([]);

  if (hidden) return null;
  return (
    <Box className="fileupload-view" sx={{ mt: 4 }}>
      <FilePond
        allowPaste
        allowReorder={true}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={20}
        // server="/api"
        name="files"
        credits={false}
        acceptedFileTypes={["image/*", "video/*"]}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={(_) => {
              setFiles([]);
              toast.success("All files have been removed", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            Clear all
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="success"
            onClick={(_) => {
              console.log("all files", files);
            }}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

FileUpload.propTypes = {
  hidden: PropTypes.bool,
};
export default FileUpload;
