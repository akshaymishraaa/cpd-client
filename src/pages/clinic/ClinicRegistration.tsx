import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerClinic } from "../../services/ClinicService";
import RegisterImage from "../../assets/images/Register-image.png";
import logo from "../../assets/images/Logo_transparent.png";

// ✅ Single object array with icons
const SERVICES = [
  {
    label: "General Medicine",
    value: "general_medicine",
    icon: "bi bi-hospital",
  },
  { label: "Pediatrics", value: "pediatrics", icon: "bi bi-emoji-smile" },
  { label: "Cardiology", value: "cardiology", icon: "bi bi-heart-pulse" },
  { label: "Orthopedics", value: "orthopedics", icon: "bi bi-bandaid" },
  { label: "Gynecology", value: "gynecology", icon: "bi bi-gender-female" },
  { label: "Dermatology", value: "dermatology", icon: "bi bi-brush" },
  { label: "ENT", value: "ent", icon: "bi bi-ear" },
  { label: "Radiology", value: "radiology", icon: "bi bi-radioactive" },
  { label: "Pathology", value: "pathology", icon: "bi bi-droplet-half" },
];

// ✅ Yup schema
const validationSchema = Yup.object({
  name: Yup.string().required("Clinic name is required"),
  location: Yup.string().required("Location is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must be numeric")
    .min(10, "Phone must be at least 10 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  servicesOffered: Yup.array()
    .min(1, "Please select at least one service")
    .required("Services are required"),
});

const RegisterClinic = () => {
  const navigate = useNavigate();

  const mutation: any = useMutation({
    mutationFn: (values: any) =>
      registerClinic({
        name: values.name,
        location: values.location,
        phone: values.phone,
        email: values.email,
        password: values.password,
        servicesOffered: values.servicesOffered,
      }),
  });

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left side fixed image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-start">
          <div>
            <img
              src={RegisterImage}
              alt="Register"
              className="img-fluid"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Right side form */}
        <div className="col-md-6 bg-white d-flex flex-column full-height pt-2">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
              <img src={logo} alt="Logo" width={60} height={60} />
              <h3 className="text-success ms-2 mb-0">Clinic Registration</h3>
            </div>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </button>
          </div>

          <Formik
            initialValues={{
              name: "",
              location: "",
              phone: "",
              email: "",
              password: "",
              confirmPassword: "",
              servicesOffered: [] as string[],
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => mutation.mutate(values)}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form>
                {/* Clinic Name */}
                <div className="mb-1">
                  <label className="form-label">Clinic Name</label>
                  <Field
                    type="text"
                    name="name"
                    className={`form-control ${
                      errors.name && touched.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                {/* Location */}
                <div className="mb-1">
                  <label className="form-label">Location</label>
                  <Field
                    type="text"
                    name="location"
                    className={`form-control ${
                      errors.location && touched.location ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                {/* Phone */}
                <div className="mb-2">
                  <label className="form-label">Phone Number</label>
                  <Field
                    type="text"
                    name="phone"
                    className={`form-control ${
                      errors.phone && touched.phone ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                {/* Email */}
                <div className="mb-2">
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

                {/* Password + Confirm Password */}
                <div className="row mb-1">
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <label className="form-label">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className={`form-control ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                </div>
                {/* Services Offered */}
                <div className="mb-1">
                  <label className="form-label">Services Offered</label>
                  <div className="row">
                    {SERVICES.map((service) => (
                      <div
                        className="col-md-6 col-lg-4 mb-2"
                        key={service.value}
                      >
                        <div className="form-check d-flex align-items-center">
                          <input
                            type="checkbox"
                            id={service.value}
                            className="form-check-input me-2"
                            checked={values.servicesOffered.includes(
                              service.value
                            )}
                            onChange={() => {
                              if (
                                values.servicesOffered.includes(service.value)
                              ) {
                                setFieldValue(
                                  "servicesOffered",
                                  values.servicesOffered.filter(
                                    (s) => s !== service.value
                                  )
                                );
                              } else {
                                setFieldValue("servicesOffered", [
                                  ...values.servicesOffered,
                                  service.value,
                                ]);
                              }
                            }}
                          />
                          <label
                            className="form-check-label d-flex align-items-center"
                            htmlFor={service.value}
                          >
                            <i
                              className={`${service.icon} me-2 text-success`}
                            ></i>
                            {service.label}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage
                    name="servicesOffered"
                    component="div"
                    className="invalid-feedback d-block"
                  />
                </div>

                {/* Submit */}
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success w-50 mt-2"
                    disabled={mutation.isLoading}
                  >
                    {mutation.isLoading ? "Registering..." : "Register"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Success / Error */}
          {mutation.isSuccess && (
            <p className="text-success mt-3">Clinic registered successfully!</p>
          )}
          {mutation.isError && (
            <p className="text-danger mt-3">
              Error: {(mutation.error as Error)?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterClinic;
