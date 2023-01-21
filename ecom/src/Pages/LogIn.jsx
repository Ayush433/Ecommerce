import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Navbar from "../Components/Navbar";

function TodoList() {
  const [post, setPost] = useState([]);
  const [showModal, setModal] = useState(false);
  const blogSchema = Yup.object().shape({
    title: Yup.string()
      .required("Required")
      .min(5, "Too Short")
      .max(10, "Too Long"),
    detail: Yup.string()
      .required("Required")
      .min(5, "Too Short")
      .max(10, "Too Long"),
    email: Yup.string().required("Required").email(),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      detail: "",
      email: "",
    },
    onSubmit: (val, { resetForm }) => {
      const newPost = {
        title: val.title,
        detail: val.detail,
        email: val.email,
      };
      setPost((prevPost) => [...prevPost, newPost]);
      resetForm();
      setModal(false);
    },
    validationSchema: blogSchema,
  });
  console.log(post);

  return (
    <>
      <Navbar />
      <div className="App bg-yellow-100 p-[3%]">
        <button
          onClick={() => setModal(true)}
          className="bg-pink-600 rounded p-2 text-white "
        >
          {" "}
          Create Post
        </button>
        {post.map((p) => {
          return (
            <div>
              <td className="p-2 border text-center sm:inset-0">{p.title}</td>
              <td className="p-2 border">{p.detail}</td>
            </div>
          );
        })}
        {showModal ? (
          <form onSubmit={formik.handleSubmit} className=" flex justify-center">
            <div className="w-[40%] shadow-lg bg-[#8DCBE6] p-5 space-y-2 ">
              <div className="flex justify-between">
                <h1>Add Some Blog</h1>
                <button onClick={() => setModal(false)}>
                  <i className="fa-solid fa-circle-xmark fa-xl text-pink-700"></i>
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="title">Title</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  className="border border-gray-500 px-2"
                  type=" title"
                  name="title"
                />
                {formik.errors.title ? (
                  <h1 className="text-red-700">{formik.errors.title} </h1>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col space-y-2 ">
                <label htmlFor="detail"> Detail</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.detail}
                  className="border border-gray-500  px-2"
                  type=" detail"
                  name="detail"
                />
                {formik.errors.detail ? (
                  <h1 className="text-red-700">{formik.errors.detail} </h1>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col space-y-2 ">
                <label htmlFor="detail">email</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="border border-gray-500  px-2"
                  type=""
                  name="email"
                />
                {formik.errors.email ? (
                  <h1 className="text-red-700">{formik.errors.email} </h1>
                ) : (
                  ""
                )}
              </div>
              <div>
                <button className="bg-blue-500 p-2 w-[40%]" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    </>
  );
}

export default TodoList;
