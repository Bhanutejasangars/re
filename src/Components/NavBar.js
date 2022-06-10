import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes, NavLink } from "react-router-dom";
import BusContext from "../context/busContext";
import BookingPage from "../Pages/BookingPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import "./NavBar.css";
function NavBar() {
  const { loggedInUser, setLoggedInUser } = useContext(BusContext);
  const [logged, setLogged] = useState([]);

  const logoutHandler = () => {
    setLoggedInUser(undefined);
    localStorage.removeItem("loggedIn");
  };

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("loggedIn")));
  }, [loggedInUser]);

  return (
    <>
      <Navbar variant="dark" className="NavBox">
        <Container>
          <Navbar.Brand>
            <NavLink className="navigationLinks" to="/">
              NavLink
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-5">
            <Nav.Link>
              <NavLink className="navigationLinks" to="/BookingPage">
                Bookings
              </NavLink>
            </Nav.Link>
            {!logged && (
              <Nav.Link>
                <NavLink className="navigationLinks" to="/login">
                  Login
                </NavLink>
              </Nav.Link>
            )}
            {logged && (
              <Nav.Link onClick={logoutHandler}>
                <NavLink className="navigationLinks" to="/logout">
                  Logout
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
