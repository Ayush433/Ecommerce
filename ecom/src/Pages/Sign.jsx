import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ErrorMessage from "../component/ErrorMessage";

const Sign = () => {
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
    name: "fasdf",
    email: "em@easdfm.com",
    password: "password",
    role: "buyer",
  });

  function handleSubmit(e) {
    e.preventDefault();

    let { name, email, password, role } = data;

    let validation = true;

    let err = {};
    if (!name) {
      err.name = "Required";
    }
    if (!email) {
      err.email = "Required";
    }

    if (Object.entries(err).length == 0) {
      axios
        .post(`${import.meta.env.VITE_APP_SERVER_DOMAIN}users/signup`, {
          name,
          email,
          password,
          role,
        })

        .then((res) => {
          //   navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          // setError({
          //     email: "alerdy."
          // })
          setError(err.response.data.errors);
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
      ENV : {import.meta.env.VITE_APP_SERVER_DOMAIN}
      <form
        onSubmit={handleSubmit}
        className="mt-7 bg-orange-300 rounded-[20px] p-[50px]"
      >
        <div className="relative z-0 w-full mb-6 group">
          <label
            for="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
            placeholder=""
          />
          {error.name && <ErrorMessage msg={error.name} />}
        </div>
        <div class="form-group">
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
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
        <div class="form-group">
          <label for="">Role</label>
          <select
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-xl"
            name="role"
            aria-label="Default select example"
            value={data.role}
            onChange={handleChange}
          >
            <option value="">Open this select menu</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          {/* {
                        error.find(el => el.param == "role")
                        &&
                        <ErrorMessage msg={error.find(el => el.param == "role").msg} />
                    } */}
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

export default Sign;
