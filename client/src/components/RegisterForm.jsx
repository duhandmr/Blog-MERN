function RegisterForm({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  serverError,
  isSubmitting,
  success,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 bg-white p-6 rounded shadow flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-center">Register</h2>

      <input
        type="text"
        name="username"
        placeholder="Usename"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
        className="border-b-2 p-2 outline-none focus:border-indigo-600 transition-all ease-in"
      />
      <p className="text-red-600 text-sm">
        {errors.username && touched.username && errors.username}
      </p>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        className="border-b-2 p-2 outline-none focus:border-indigo-600 transition-all ease-in"
      />
      <p className="text-red-600 text-sm mt-1">
        {errors.email && touched.email && errors.email}
      </p>

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        className="border-b-2 p-2 outline-none focus:border-indigo-600 transition-all ease-in"
      />
      <p className="text-red-600 text-sm">
        {errors.password && touched.password && errors.password}
      </p>

      {serverError && (
        <p className="text-red-600 text-sm text-center">{serverError}</p>
      )}

      {success && (
        <p className="text-green-600 text-sm text-center">{success}</p>
      )}
      <button
        className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-2xl p-0.5 text-white"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Kayıt Olunuyor..." : "Kayıt Ol"}
      </button>
    </form>
  );
}

export default RegisterForm;
