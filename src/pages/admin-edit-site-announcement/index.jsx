import PropTypes from "prop-types";
import useSWR, { useSWRConfig } from "swr";
import ComponentSkeleton from "../components-overview/ComponentSkeleton";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
const schema = {
  title: "Site Announcement",
  description: "",
  type: "object",
  required: ["message", "status"],
  properties: {
    message: {
      type: "string",
      title: "Announcement Content",
      default: "",
    },
    status: {
      type: "boolean",
      title: "Announcement Status",
    },
  },
};

const log = (type) => console.log.bind(console, type);
const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminEditSiteAnnouncement = (props) => {
  const BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:3001";
  const { data, mutate, error, isLoading } = useSWR(
    `${BASE_URL}/site-announcement`,
    fetcher
  );
  const sendUpdateData = async (newData) => {
    const noti = toast.loading("Please wait for data to be updated ...");
    await fetch(`${BASE_URL}/site-announcement`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      toast.update(noti, {
        render: "Data has been updated successfully",
        type: "success",
        isLoading: false,
      });
      console.log(res);
    });
  };
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <ComponentSkeleton>
      <ToastContainer />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Form
            formData={data}
            validator={validator}
            schema={schema}
            onChange={log("changed")}
            onSubmit={({ formData }, e) => {
              console.log(formData);
              sendUpdateData(formData);
            }}
            onError={log("errors")}
          />
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

AdminEditSiteAnnouncement.propTypes = {};

export default AdminEditSiteAnnouncement;
