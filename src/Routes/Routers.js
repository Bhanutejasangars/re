import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import BusComponent from "../Components/BusComponent";
import BusContext from "../context/busContext";
import BookingPage from "../Pages/BookingPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
function Routers() {
  const { loggedInUser } = useContext(BusContext);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        {!loggedInUser && <Route path="/login" element={<Login />} />}
        {!loggedInUser && <Route path="/register" element={<Register />} />}
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/BusComponent" element={<BusComponent />} />
      </Routes>
    </>
  );
}

export default Routers;
