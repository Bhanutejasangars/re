import React, { useContext } from "react";
import "./BusComponent.css";
import { Button } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ModalWindow from "./ModalWindow";
import BusContext from "../context/busContext";
import {
  availableBuses,
  busDetails,
  getBusData,
} from "../BusesData/BusesRouteData";
function BusComponent() {
  const { journeyDetail } = useContext(BusContext);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const BookHandler = () => {
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen(false);
  };

  console.log({ journeyDetail });

  const busData = getBusData(journeyDetail, availableBuses);

  return (
    <>
      {busData[0]?.from !== undefined &&
        busData?.map((data) => (
          <div className="main-container2">
            <div className="bus-details-box">
              <div className="travel-details-box">
                <div className="travel-logo-box">
                  <GoPrimitiveDot className="travel-logo" />
                  <HiOutlineDotsVertical className="travel-logo" />
                  <GoPrimitiveDot className="travel-logo" />
                </div>
                <div className="from-to-details-box">
                  <h6>{data?.from}</h6>
                  <h6>{data?.time + "  "} Hr</h6>
                  <h6>{data?.to}</h6>
                </div>
              </div>
              <div className="bus-company-details ">
                <h4 className="bus-company-name">{data?.name}</h4>
                <h6>{data?.type}</h6>
              </div>
              <div className="bus-pricing-box">
                <h3>&#8377;{data?.price}</h3>
              </div>
              <div className="bus-seats-availability-box">
                <h5>{data?.seats} Seats Left</h5>
              </div>
              <div className="bus-booking-box">
                <Button
                  type="button"
                  variant="danger"
                  size="sm"
                  onClick={BookHandler}
                >
                  Book Now
                </Button>
              </div>
            </div>
            {modalOpen && <ModalWindow closeModal={close} />}
          </div>
        ))}
      {busData[0]?.from === undefined && navigate("/BookingPage")}
    </>
  );
}

export default BusComponent;
