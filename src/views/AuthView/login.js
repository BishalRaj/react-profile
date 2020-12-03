import { Box, Container, Grid, TextField, Typography } from "@material-ui/core";
import Axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Cookies from "universal-cookie";
import FacebookIcon from "../../images/Facebook";
import GoogleIcon from "../../images/Google";
// import GoogleIcon from "../../../images/Google";
function Login(props) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const cookies = new Cookies();

  function handleChange() {
    props.onChange(false);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePwdInput(e) {
    setPwd(e.target.value);
  }

  function login() {
    Axios.post("http://localhost:8080/login", { email: email, password: pwd })
      .then((reply) => {
        cookies.set("token", reply.data.response, { path: "/" });
        alert(cookies.get("token"));
        props.handleSuccessfulLogin(reply);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Row className="w-100 bg-light p-0 m-0">
      <Col lg={6} className="mx-auto bg-light p-5">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmailInput}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePwdInput}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="w-100 default-xxs-font"
            onClick={login}
          >
            Login
          </Button>
          <p>Or</p>
          <Button
            variant="primary"
            className="w-100 default-xxs-font"
            onClick={handleChange}
          >
            Go to Register
          </Button>
        </Form>
      </Col>

      {/* <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "demo@devias.io",
              password: "Password123",
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
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box mt={3} mb={1}>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{" "}
                 
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    */}
    </Row>
  );
}
export default Login;
