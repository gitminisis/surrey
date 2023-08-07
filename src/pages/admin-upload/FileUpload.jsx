import React, { useState, useCallback } from "react";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import PropTypes from "prop-types";
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
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
    <div className="fileupload-view">
      <FilePond
        allowPaste
        allowReorder={true}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={20}
        server="/api"
        name="files"
        credits={false}
        acceptedFileTypes={["image/*", "video/*"]}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

FileUpload.propTypes = {
  hidden: PropTypes.bool,
};
export default FileUpload;
