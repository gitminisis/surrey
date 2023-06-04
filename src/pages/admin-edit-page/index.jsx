import PropTypes from "prop-types";
import useSWR, { useSWRConfig } from "swr";
import { useParams } from "react-router";
import ComponentSkeleton from "pages/components-overview/ComponentSkeleton";
import { Grid, Typography, Button, FormHelperText, Stack } from "@mui/material";
import AnimateButton from "components/@extended/AnimateButton";
import MainCard from "components/MainCard";
import FieldForm from "./FieldForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminEditPage = (props) => {
  const { id } = useParams();
  const BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:3001";
  const { data, mutate, error, isLoading } = useSWR(
    `${BASE_URL}/page/${id}`,
    fetcher,
  );

  const updateData = useRef(false);
  const fieldHandleChange = (value, object, index) => {
    object[index].properties = value;
    updateData.current = object;
  };

  const sendUpdateData = async (newData) => {
    const noti = toast.loading("Please wait for data to be updated ...");
    await fetch(`${BASE_URL}/page/${id}`, {
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
  const renderForm = (object, handleChange) => {
    return object.map((o, i) => {
      const { component, properties, children, name, description } = o;
      return (
        <Stack spacing={3} key={i}>
          <MainCard title={name} sx={{ my: 1 }} >
            <Typography variant="subtitle1" gutterBottom>
              {description}
            </Typography>

            {properties
              ? Object.keys(properties)
                .map((k) => k)
                .map((key, idx) => (
                  <Grid item sx={{ my: 3 }} key={idx}>
                    <FieldForm
                      data={properties[key]}
                      handleChange={(value, data) => {
                        let newData = Object.assign({}, data);
                        newData.value = value;
                        let newProp = Object.assign({}, properties);
                        newProp[key] = newData;
                        handleChange(newProp, object, i);
                      }}
                    />
                  </Grid>
                ))
              : null}
            {children ? (
              <Grid item spacing={3}>
                <Typography variant="subtitle2" gutterBottom >
                  Children Components
                </Typography>
                {renderForm(children, handleChange)}
              </Grid>
            ) : null}
          </MainCard>
        </Stack>
      );
    });
  };
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <ComponentSkeleton>
      <ToastContainer />
      <Grid container spacing={3}>
        <Grid item xs={12}>

          <Formik
            initialValues={{}}
            validationSchema={Yup.object().shape({})}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              if (!updateData.current) {
                toast("Please make changes to your data");
                return;
              }
              try {
                setStatus({ success: false });
                setSubmitting(false);
                await sendUpdateData(updateData.current);
                mutate();
              } catch (err) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                {renderForm(data, fieldHandleChange)}

                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Update
                    </Button>
                  </AnimateButton>
                </Grid>
              </form>
            )}
          </Formik>
          {/* {JSON.stringify(data)} */}
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

AdminEditPage.propTypes = {
  page: PropTypes.string,
};

export default AdminEditPage;
