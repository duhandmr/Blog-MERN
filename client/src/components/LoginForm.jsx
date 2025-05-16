function LoginForm({
  handleSubmit,
  serverError,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  isSubmitting,
}) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-10">
      {serverError && (
        <p className="text-red-600 text-center text-sm">{serverError}</p>
      )}
      <div className="flex flex-col">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="border-b-3 ease-in-out focus:border-indigo-600 focus:outline-hidden"
        />

        <p className="text-red-600 text-sm">
          {errors.email && touched.email && errors.email}
        </p>
      </div>

      <div className="flex flex-col">
        <p>Password:</p>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="border-b-3 ease-in-out focus:border-indigo-600 focus:outline-hidden"
        />

        <p className="text-red-600 text-sm">
          {errors.password && touched.password && errors.password}
        </p>
      </div>
      <button
        className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-2xl p-0.5 text-white"
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
