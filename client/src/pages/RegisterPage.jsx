import { Formik } from "formik";
import { registerUser } from "../services/authApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

function Register() {
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username is required";
          }
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setServerError("");
          setSuccess("");
          try {
            await registerUser(values);
            setSuccess("Kayıt başarılı! Yönlendiriliyorsunuz...");
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          } catch (err) {
            setServerError(err.response?.data?.message || "Kayıt başarısız.");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <RegisterForm
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            serverError={serverError}
            success={success}
          />
        )}
      </Formik>
    </div>
  );
}

export default Register;
