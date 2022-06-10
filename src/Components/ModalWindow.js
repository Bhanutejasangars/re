import React, { useContext } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { useState } from "react";
import "./ModalWindow.css";
import { FaMale, FaFemale } from "react-icons/fa";
import BusContext from "../context/busContext";
import { Toast } from "bootstrap";
import { toast, ToastContainer } from "react-toastify";

function ModalWindow(props) {
  const { setTicket, ticket } = useContext(BusContext);
  const [names, setnames] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [date, setdate] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closehandle = () => {
    props.closeModal();
  };

  const confirmButtonHandler = (e) => {
    e.preventDefault();
    const newTicket = { names, email, number, age, gender };
    if (!names || !email || !number || !age || !gender) {
      toast.error("Complete the form");
    }
    setTicket((preState) => {
      return [...preState, newTicket];
    });
    localStorage.setItem(JSON.stringify([...ticket, newTicket]));
  };

  return (
    <>
      <Modal className="modal-box" show={true} onHide={handleClose}>
        <Modal.Header className="modal-heading ">
          Passenger Details
          <FaFemale />
          <FaMale />
        </Modal.Header>
        <Container>
          <Modal.Body className="modal-body ">
            <div className="personal-details-box">
              <input
                className="modalinput name"
                type="text"
                placeholder="enter Name"
                value={names}
                onChange={(e) => setnames(e.target.value)}
                required
              ></input>

              <input
                className="modalinput age"
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setage(e.target.value)}
                required
              ></input>

              <select className="gender">
                <option className="male-gender">Male</option>
                <option className="female-gender">Female</option>
              </select>
            </div>

            <input
              className="email "
              type="email"
              placeholder="enter Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            ></input>

            <input
              className="phone-number"
              type="tel"
              placeholder="enter Phone number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              required
            ></input>
          </Modal.Body>
        </Container>

        <Button
          className="close-button"
          variant="secondary"
          onClick={closehandle}
        >
          Close
        </Button>
        <Button
          className="save-button"
          variant="primary"
          onClick={confirmButtonHandler}
        >
          Confirm Ticket
        </Button>

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Modal>
    </>
  );
}

export default ModalWindow;
