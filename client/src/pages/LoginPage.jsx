import { useState, useContext } from "react";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../services/authApi";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import { Formik } from "formik";

function LoginPage() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setServerError("");
          try {
            const data = await loginUser(values);
            login({
              username: data.user.username,
              token: data.token,
            });

            navigate("/blogs");
          } catch (err) {
            setServerError(err.response?.data?.message || "Login failed");
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
          <LoginForm
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isSubmitting={isSubmitting}
            serverError={serverError}
          />
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
