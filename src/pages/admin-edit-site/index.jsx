import PropTypes from "prop-types";
import useSWR, { useSWRConfig } from "swr";
import ComponentSkeleton from "../components-overview/ComponentSkeleton";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "@rjsf/mui";

const schema = {
  title: "Website Settings",
  description: "",
  type: "object",
  required: ["siteName", "logo", "logo2"],
  properties: {
    siteName: {
      type: "string",
      title: "Site Name",
      default: "",
    },
    logo: {
      type: "string",
      title: "Header Logo",
    },
    logo2: {
      type: "string",
      title: "Footer Logo",
    },
  },
};
const log = (type) => console.log.bind(console, type);
const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminEditSite = (props) => {
  const BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:3001";
  const { data, mutate, error, isLoading } = useSWR(
    `${BASE_URL}/site-layout`,
    fetcher
  );
  const sendUpdateData = async (newData) => {
    const noti = toast.loading("Please wait for data to be updated ...");
    await fetch(`${BASE_URL}/site-layout`, {
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
            schema={schema}
            validator={validator}
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

AdminEditSite.propTypes = {};

export default AdminEditSite;
