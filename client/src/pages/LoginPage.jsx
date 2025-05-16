import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RedirectRegisterBtn from "../components/RedirectRegisterBtn";
import { loginUser } from "../services/authApi";
import { useNavigate } from "react-router-dom";

import { Formik } from "formik";

function LoginPage() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <h1>Login</h1>
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
            localStorage.setItem("token", data.token);
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
      <RedirectRegisterBtn />
    </div>
  );
}

export default LoginPage;
