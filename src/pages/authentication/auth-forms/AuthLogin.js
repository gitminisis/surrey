import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
// project import
import FirebaseSocial from "./FirebaseSocial";
import AnimateButton from "components/@extended/AnimateButton";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { authenticateLogin, login, logout } from "utils/authentication";

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const [checked, setChecked] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          username: "mike",
          password: "P@$$w0rd",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required("Username is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            login(values.username, values.password).then((res) => {
              let authentication = authenticateLogin(res);
              if (authentication.passed) {
                setStatus({ success: true });
                setSubmitting(false);
                navigate("/");
              } else {
                console.log(authentication)
                setErrors({ submit: authentication.message });
              }
            });
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="username-login">
                    Email Address
                  </InputLabel>
                  <OutlinedInput
                    id="username-login"
                    value={values.username}
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter username"
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              {/* <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="h6">Keep me sign in</Typography>
                    }
                  />
                  <Link
                    variant="h6"
                    component={RouterLink}
                    to=""
                    color="text.primary"
                  >
                    Forgot Password?
                  </Link>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )} */}
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>

                
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
