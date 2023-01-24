import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Demo from "./Pages/Demo";
import Sign from "./Pages/Sign";

const queryClient = new QueryClient();
const App = () => {
  const [search, setSearch] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="demo" element={<Demo />} />
          <Route path="sign" element={<Sign />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
