import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Demo from "./Pages/Demo";
import Sign from "./Pages/Sign";
import LoginForm from "./Pages/LoginForm";
import ProductDetails from "./Products/Product";

const queryClient = new QueryClient();
const App = () => {
  const [search, setSearch] = useState("");
  let access_token = localStorage.getItem("access_token");

  const [user, setUser] = useState(access_token);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar
          search={search}
          setSearch={setSearch}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="logins" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="demo" element={<Demo />} />
          <Route path="sign" element={<Sign />} />
          <Route path="login" element={<LoginForm setUser={setUser} />} />
          <Route path="products">
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
