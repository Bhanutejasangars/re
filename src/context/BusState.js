import React, { useEffect, useState } from "react";
import BusContext from "./busContext";

function BusState(props) {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [journeyDetail, setJourneyDetail] = useState([]);
  const [ticket, setTicket] = useState([]);

  let userData = JSON.parse(localStorage.getItem("UsersData"));
  let userLogged = JSON.parse(localStorage.getItem("loggedIn"));
  let getTicket = JSON.parse(localStorage.getItem("ticket"));

  useEffect(() => {
    if (userData === null) {
      setUsers([]);
    } else {
      setUsers(userData);
    }

    if (userLogged === null) {
      setLoggedInUser(undefined);
    } else {
      setLoggedInUser(userLogged);
    }

    if (getTicket === null) {
      setTicket([]);
    } else {
      setTicket(getTicket);
    }
  }, []);

  return (
    <BusContext.Provider
      value={{
        users,
        setUsers,
        setLoggedInUser,
        loggedInUser,
        setJourneyDetail,
        journeyDetail,
        setTicket,
        ticket,
      }}
    >
      {props.children}
    </BusContext.Provider>
  );
}

export default BusState;
