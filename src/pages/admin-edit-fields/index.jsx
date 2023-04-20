import PropTypes from "prop-types";
import useSWR, { useSWRConfig } from "swr";
import { useParams } from "react-router";
import ComponentSkeleton from "pages/components-overview/ComponentSkeleton";
import { Grid, Typography, Button, FormHelperText, Stack } from "@mui/material";
import AnimateButton from "components/@extended/AnimateButton";
import MainCard from "components/MainCard";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FieldForm from "./FieldForm";
const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminEditFields = (props) => {
  const { id } = useParams();
  const BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:3001";
  const { data, mutate, error, isLoading } = useSWR(
    `${BASE_URL}/page/${id}`,
    fetcher
  );
  const updateData = useRef(false);
  const fieldHandleChange = (value, object, index) => {
    object[index].displayFields = value;
    updateData.current = object;
  };
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  const renderForm = (object, handleChange) => {
    console.log(object);
    return object.map((o, i) => {
      const { database, databaseName, availableFields, displayFields } = o;
      return (
        <Stack spacing={3} key={i}>
          <MainCard title={databaseName} sx={{ my: 1 }}>
            <Typography variant="subtitle1" gutterBottom>
              {databaseName}
            </Typography>

            {displayFields
              ? displayFields.map((field, idx) => (
                  <Grid item sx={{ my: 3 }} key={idx}>
                    <FieldForm
                      data={field}
                      handleChange={(value, data) => {
                        console.log(1);
                      }}
                    />
                  </Grid>
                ))
              : null}
          </MainCard>
        </Stack>
      );
    });
  };
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
                // await sendUpdateData(updateData.current);
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

export default AdminEditFields;
