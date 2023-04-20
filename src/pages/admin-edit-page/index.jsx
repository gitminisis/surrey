import PropTypes from "prop-types";
import useSWR from "swr";
import { useParams } from "react-router";
import ComponentSkeleton from "pages/components-overview/ComponentSkeleton";
import { Grid, Typography, Button, FormHelperText } from "@mui/material";
import AnimateButton from "components/@extended/AnimateButton";
import MainCard from "components/MainCard";
import FieldForm from "./FieldForm";
import { Formik } from "formik";
import * as Yup from "yup";
const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminEditPage = (props) => {
  const { id } = useParams();
  const BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:3001";
  const { data, error, isLoading } = useSWR(`${BASE_URL}/page/${id}`, fetcher);

  const renderForm = (object) => {
    return object.map((o, i) => {
      const { component, properties, children, name, description } = o;

      return (
        <div key={i}>
          <Typography variant="h3">{name}</Typography>

          <Typography variant="subtitle1" gutterBottom>
            {description}
          </Typography>

          {Object.keys(properties)
            .map((k) => k)
            .map((key, idx) => (
              <Grid item sx={{ my: 2 }} key={idx}>
                {" "}
                <FieldForm data={properties[key]} />
              </Grid>
            ))}
          {children ? (
            <Grid container spacing={3}>
              {children.map((child) => renderForm(child))}
            </Grid>
          ) : null}
        </div>
      );
    });
  };
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <ComponentSkeleton>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCard title={id}>
            <Formik
              initialValues={{}}
              validationSchema={Yup.object().shape({})}
              onSubmit={async (
                values,
                { setErrors, setStatus, setSubmitting }
              ) => {
                try {
                  setStatus({ success: false });
                  setSubmitting(false);
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
                <form>
                  {renderForm(data)}

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
          </MainCard>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

AdminEditPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default AdminEditPage;
