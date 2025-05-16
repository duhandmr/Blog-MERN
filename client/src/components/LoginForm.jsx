import { useState } from "react";
import RedirectRegisterBtn from "./RedirectRegisterBtn";

import { Eye, EyeOff } from "lucide-react";

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
  const [showPwd, setShowPwd] = useState(false);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 bg-white p-6 rounded shadow flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      {serverError && (
        <p className="text-red-600 text-center text-sm">{serverError}</p>
      )}
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          onBlur={handleBlur}
          value={values.email}
          className="border-b-2 p-2 outline-none focus:border-indigo-600 transition-all ease-in"
        />

        <p
          className={`text-red-600 text-sm mt-1 transition-all duration-300 ${
            errors.email && touched.email ? "opacity-100 h-5" : "opacity-0 h-0"
          }`}
        >
          {errors.email && touched.email ? errors.email : ""}
        </p>
      </div>

      <div className="flex flex-col relative">
        <input
          type={showPwd ? "text" : "password"}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          onBlur={handleBlur}
          value={values.password}
          className="border-b-2 p-2 outline-none focus:border-indigo-600 transition-all ease-in"
        />

        <p className="text-red-600 text-sm mt-1">
          {errors.password && touched.password && errors.password}
        </p>
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setShowPwd(!showPwd)}
        >
          {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>
      <button
        className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-2xl p-0.5 text-white"
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </button>
      <RedirectRegisterBtn />
    </form>
  );
}

export default LoginForm;
