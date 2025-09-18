import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../services/authApi";
import { setAuth } from "../../store/authSlice";
import LoginImage from "../../assets/images/Register-image.png";
import logo from "../../assets/images/Logo_transparent.png";

// Role-wise route mapping
const roleRoutes: Record<string, string> = {
  patient: "/patient/dashboard",
  doctor: "/doctor/dashboard",
  clinic: "/clinic/dashboard",
  admin: "/admin/user-management",
  lab: "/lab/dashboard",
};

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation: any = useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      login(values),
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch(setAuth({ user: data.user, token: data.token }));
      const route = roleRoutes[data.user.role] || "/";
      navigate(route, { replace: true });
    },
  });

  const handleSocialLogin = (provider: string) => {
    alert(`Login with ${provider} clicked`); // later integrate OAuth
  };

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Left side image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-start">
          <div>
            <img
              src={LoginImage}
              alt="Login Illustration"
              className="img-fluid"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Right side form */}
        <div className="col-md-6 bg-white d-flex flex-column min-vh-100">
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="full-width" style={{ maxWidth: 400 }}>
              {/* Logo + heading */}
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src={logo} alt="Logo" width={60} height={60} />
                <h3 className="text-success ms-2 mb-0">Login</h3>
              </div>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => mutation.mutate(values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className={`form-control ${
                          errors.email && touched.email ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={`form-control ${
                          errors.password && touched.password ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success w-100 mt-2"
                      disabled={mutation.isLoading}
                    >
                      {mutation.isLoading ? "Logging in..." : "Login"}
                    </button>
                  </Form>
                )}
              </Formik>

              {/* Error from API */}
              {mutation.isError && (
                <p className="text-danger mt-2">
                  {mutation.error?.message || "Login failed"}
                </p>
              )}

              {/* Divider */}
              <div className="text-center my-3">
                <span className="text-muted">or login with</span>
              </div>

              {/* Social login */}
              <div className="d-flex flex-column gap-2">
                <button
                  type="button"
                  className="btn btn-outline-danger w-100"
                  onClick={() => handleSocialLogin("Google")}
                >
                  <i className="bi bi-google me-2"></i> Login with Google
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary w-100"
                  onClick={() => handleSocialLogin("Facebook")}
                >
                  <i className="bi bi-facebook me-2"></i> Login with Facebook
                </button>
              </div>

              {/* Register link */}
              <p className="text-center mt-3 mb-0">
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="btn btn-link p-0 text-success"
                  onClick={() => navigate("/auth/register")}
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
