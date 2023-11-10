import useSWR, { useSWRConfig } from "swr";
import ComponentSkeleton from "../components-overview/ComponentSkeleton";
import { Grid, Typography, Button, FormHelperText, Stack } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "@rjsf/mui";

const displayFields = {
  title: "Detail Display Fields",
  type: "object",
  properties: {
    database: {
      type: "string",
      title: "Database Name",
    },
    displayFields: {
      type: "array",
      title: "Display Fields",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "Field Mnemonic",
          },
          label: {
            type: "string",
            title: "Field Label",
          },
        },
      },
    },
  },
};

const schema = [displayFields, displayFields];

const log = (type) => console.log.bind(console, type);
const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminEditSite = (props) => {
  const BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:3001";
  const { data, mutate, error, isLoading } = useSWR(
    `${BASE_URL}/detail-fields`,
    fetcher
  );
  const sendUpdateData = async (newData) => {
    const noti = toast.loading("Please wait for data to be updated ...");
    await fetch(`${BASE_URL}/detail-fields`, {
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
          {schema.map((e, i) => (
            <>
              <Form
                key={i}
                formData={data[i]}
                schema={e}
                onChange={log("changed")}
                onSubmit={({ formData }) => {
                  console.log(formData);
                  let newData = data;
                  data[i] = formData;
                  sendUpdateData(newData);
                }}
                onError={log("errors")}
              />
              <br />
            </>
          ))}
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

AdminEditSite.propTypes = {};

export default AdminEditSite;
