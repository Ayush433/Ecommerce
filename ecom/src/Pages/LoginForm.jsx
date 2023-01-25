import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Utilis/Error";
// import ErrorMessage from "../component/ErrorMessage";

const LoginForm = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    name: "",
    email: "",
  });

  // const [error, setError] = useState([
  //     {
  //         param: "email",
  //         msg: "alredy...."
  //     }
  // ])

  // const [name, setname] = useState("");

  const [data, setData] = useState({
    email: "em@easdfm.com",
    password: "password",
  });

  function handleSubmit(e) {
    e.preventDefault();

    let { email, password } = data;

    let validation = true;

    let err = {};
    if (!email) {
      err.email = "Required";
    }

    if (Object.entries(err).length == 0) {
      axios
        .post(`${import.meta.env.VITE_APP_SERVER_DOMAIN}users/login`, {
          email,
          password,
        })

        .then((res) => {
          //   navigate("/login");

          navigate("/");

          localStorage.setItem("access_token", res.data.access_token);
          props.setUser(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError(err);
    }

    /* 
                Authentication VS authorization
        
        2 - SUCCESS
        3 - REDIRECT
        4 
         400 - BAD REQUEST 
         401 - UNAUTHENTICATED / not logge in
         403 - unauthorized / forbiddden / logged in but donot have correct role/acces
         404 -page not found / resource not found       
        5
         */
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className=" ">
      <form
        onSubmit={handleSubmit}
        className="mt-7 bg-orange-300 rounded-[20px] p-[50px]"
      >
        <div class="form-group">
          <label for="">Email</label>
          <input
            type="email"
            name="email"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
            onChange={handleChange}
            value={data.email}
            placeholder=""
          />
          {error.email && <ErrorMessage msg={error.email} />}
          {/* {
                        error.find(el => el.param == "email")
                        &&
                        <ErrorMessage msg={error.find(el => el.param == "email").msg} />
                    } */}
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
            placeholder=""
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

/* 
[
    {
        "value": "em@em.com",
        "msg": "E-mail already in use",
        "param": "email",
        "location": "body"
    },
    {
        "value": "em@em.com",
        "msg": "not sucpported",
        "param": "role",
        "location": "body"
    }
]
// output
let err ={}
erros[0]["param"] = errros[0].msg
{
    "email":"E-mail already in us..",
    "role" :"not sucpporte"
}
*/

export default LoginForm;
