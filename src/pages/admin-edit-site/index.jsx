import PropTypes from "prop-types";
import useSWR, { useSWRConfig } from "swr";
import { useParams } from "react-router";
import ComponentSkeleton from "pages/components-overview/ComponentSkeleton";
import { Grid, Typography, Button, FormHelperText, Stack } from "@mui/material";
import AnimateButton from "components/@extended/AnimateButton";
import MainCard from "components/MainCard";
// import FieldForm from "./FieldForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "@rjsf/validator-ajv8";
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
      title: "Site Logo 1",
    },
    logo2: {
      type: "string",
      title: "Site Logo 2",
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

AdminEditSite.propTypes = {
  page: PropTypes.string,
};

export default AdminEditSite;
