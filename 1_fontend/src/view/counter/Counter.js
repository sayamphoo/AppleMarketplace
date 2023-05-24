/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import "./Counter.css";
import CapacityTag from "./capacity_tag/CapacityTag";
import Order from "./order/Order";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

export default () => {
  const dasta = useLocation().state;
  let { img, description } = dasta;

  const [counters, setCounters] = useState({
    model: "-",
    capacity: "-",
    color: "-",
  });

  function setSelect(type, data) {
    switch (type) {
      case "model":
        setCounters((prevState) => ({
          ...prevState,
          model: data,
        }));
        break;
      case "capacity":
        setCounters((prevState) => ({
          ...prevState,
          capacity: data,
        }));
        break;
      case "color":
        setCounters((prevState) => ({
          ...prevState,
          color:data
        }));
        break;
      default:
    }
  }

  let cardModel = description.model.map((item, index) => {
    return (
      <CapacityTag
        key={index}
        selects={counters.model}
        onClick={() => setSelect("model", item)}
        data={item}
      ></CapacityTag>
    );
  });

  let cardCapacity = description.capacity.map((item, index) => {
    return (
      <CapacityTag
        key={index}
        selects={counters.capacity}
        onClick={() => setSelect("capacity", item)}
        data={item}
      ></CapacityTag>
    );
  });

  let cardColor = description.color.map((item, index) => {
    return (
      <CapacityTag
        key={index}
        selects={counters.color}
        onClick={() => setSelect("color", item)}
        data={item}
      ></CapacityTag>
    );
  });

  return (
    <Container>
      <div className="p-5 py-5 bg-white rounded mt-5">
        <div className="counter-contrainer">
          <div>
            <img width={250} src={img} alt=""/>
          </div>

          <div>
            <h3>Select Model</h3>
            <div className="tagCapacity mt-4">{cardModel}</div>
            <h3 className="mt-5">Select Capacity</h3>
            <div className="tagCapacity mt-4">{cardCapacity}</div>
            <h3 className="mt-5">Select Color</h3>
            <div className="tagCapacity mt-4">{cardColor}</div>
          </div>

          <div>
            <Order counter={counters} />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};
