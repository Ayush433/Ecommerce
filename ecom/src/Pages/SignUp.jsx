import React from "react";
import Navbar from "../Components/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [post, setPost] = useState([]);

  const blogSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Please Enter Valid Email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    name: Yup.string()
      .required("Required")
      .min(5, "Too Short")
      .max(10, "Too Long"),
    Last_name: Yup.string()
      .required("Required")
      .min(5, "Too Short")
      .max(10, "Too Long"),
    confirm: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    number: Yup.string().required("Required"),
  });
  axios
    .post(`${import.meta.env.VITE_APP_SERVER_DOMAIN}users/signup`)
    .then((res) => {})
    .catch((err) => {});

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
      name: "",
      Last_name: "",
      number: "",
    },

    onSubmit: (val) => {
      console.log(val);
      const newPost = {
        email: val.email,
        password: val.password,
        name: val.name,
        Last_name: val.Last_name,
        number: val.number,
      };
      setPost((prevPost) => [...prevPost, newPost]);
    },

    validationSchema: blogSchema,
  });

  console.log(post);
  return (
    <>
      ENV : {import.meta.env.VITE_APP_SERVER_DOMAIN}
      <div className="">
        <div className="">
          <form
            onSubmit={formik.handleSubmit}
            className="mt-7 bg-orange-300 rounded-[20px] p-[50px]"
          >
            <div className="relative z-0 w-full mb-6 group">
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
              <input
                type="email"
                // onChange={(e) => formik.handleChange(e)}
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
                placeholder=" "
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-700">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                id="floating_password"
                className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
                placeholder=""
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-700">{formik.errors.password}</div>
              ) : null}
              <label
                for="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="confirm"
                onChange={formik.handleChange}
                value={formik.values.confirm}
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
              />
              {formik.touched.confirm && formik.errors.confirm ? (
                <h1 className="text-red-700">{formik.errors.confirm}</h1>
              ) : (
                ""
              )}
              <label
                for="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
                />
                {formik.touched.name && formik.errors.name ? (
                  <h1 className="text-red-700">{formik.errors.name}</h1>
                ) : (
                  ""
                )}
                <label
                  for="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Last_name"
                  onChange={formik.handleChange}
                  value={formik.values.Last_name}
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
                  placeholder=" "
                />
                {formik.touched.Last_name && formik.errors.Last_name ? (
                  <h1 className="text-red-700">{formik.errors.Last_name}</h1>
                ) : (
                  ""
                )}
                <label
                  for="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
