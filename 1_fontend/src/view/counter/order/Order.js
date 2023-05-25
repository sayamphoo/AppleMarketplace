/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import "./Order.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Selectpayment from "../../dialogayment/Selectpayment";
import qp from "../../img/qrcode-p.svg"
import qk from "../../img/qrcode-k.svg";

export default (props) => {
  const navigate = useNavigate();
  const [orders, setOrder] = useState({
    model: props.counter.model || "",
    capacity: props.counter.capacity || "",
    color: props.counter.color || "",
    quantity: 1,
    address: "",
    email: "",
    payment: {
      state: false,
      img: "",
      title: "",
    },
  });


  useEffect(() => {
    setOrder((prevState) => ({
      ...prevState,
      model: props.counter.model || "",
      capacity: props.counter.capacity || "",
      color: props.counter.color || "",
    }));
  }, [props]);

  function openSelectPayment() {
    setOrder((prevState) => ({
      ...prevState,
      payment: {
        ...prevState.payment,
        state: !prevState.payment.state,
      },
    }));
  }

  function callback(img, title) {
    setOrder((prevState) => ({
      ...prevState,
      payment: {
        state: !prevState.payment.state,
        img: img,
        title: title,
      },
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      orders.model === "" ||
      orders.capacity === "" ||
      orders.color === "" ||
      orders.address === "" ||
      orders.email === "" ||
      orders.payment?.state
    ) {
      Swal.fire({
        icon: "warning",
        text: "Please complete the information",
      });
    } else {
      Swal.fire({
        title: "Please wait",
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then(() => {
        const qr = (orders.payment.title === "K-Plus")? qk : qp
        Swal.fire({
          title: orders.payment.title,
          text: "Scan here to pay your bill.",
          imageUrl: qr,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        })
          .then(() => {
            axios.post("http://54.172.126.188:5000/sendemail", {
              model: orders.model,
              capacity: orders.capacity,
              color: orders.color,
              quantity: orders.quantity,
              address: orders.address,
              email: orders.email,
              payment: orders.payment.title,
            });
            Swal.fire("Good job!", "You clicked the button!", "success").then(() => {
         
              navigate('/');
            });
          })
          .then(() => {});
      });
    }
  }

  return (
    <div className="Order">
      <div className={orders.payment.state ? "payment-show" : "payment-hide"}>
        <Selectpayment callback={callback} />
      </div>

      <form className="mt-3" onSubmit={handleSubmit}>
        <h3>Order</h3>
        <p className="m-0">Model</p>
        <p className="mx-3 fs-16">{orders?.model}</p>
        <p className="m-0">Capacity</p>
        <p className="mx-3 fs-16">{orders?.capacity}</p>
        <p className="m-0">Color</p>
        <p className="mx-3 fs-16">{orders?.color}</p>

        <label htmlFor="exampleInputNumber" className="mt-2">
          จำนวน
        </label>
        <input
          name="number"
          defaultValue={1}
          type="number"
          id="typeNumber"
          placeholder="1"
          className="form-control"
          min={1}
          max={10}
          value={orders.quantity}
          onChange={(e) =>
            setOrder((prevState) => ({
              ...prevState,
              quantity: e.target.value,
            }))
          }
        />
        <label htmlFor="exampleInputNumber" className="mt-2"></label>

        <label className="mt-2">Address</label>
        <textarea
          className="mt-1 p-2"
          value={orders.address}
          onChange={(e) =>
            setOrder((prevState) => ({
              ...prevState,
              address: e.target.value,
            }))
          }
        ></textarea>

        <div className="payment mt-3" onClick={() => openSelectPayment()}>
          {(() => {
            if (orders.payment.title === "") {
              return <div className="none-select-pament">ยังไม่ได้เลือก</div>;
            } else {
              return (
                <div className="select-pament">
                  <img src={orders.payment.img} alt="" width={35} />
                  <span>{orders.payment.title}</span>
                </div>
              );
            }

            // switch (orders.payment.title) {
            //   case "":
            //     return (
            //       <div
            //         onClick={() => setPyment()}
            //         className="none-select-pament"
            //       >
            //         ยังไม่ได้เลือก
            //       </div>
            //     );
            //   default:
            //     return (
            //       <div onClick={() => setPyment()} className="select-pament">
            //         <img src={orders.payment.img} alt="" width={35} />
            //         <span>{orders.payment.title}</span>
            //       </div>
            //     );
            // }
          })()}
        </div>
        <label className="mt-2">E-mail</label>
        <input
          className="mt-1 p-2"
          value={orders.email}
          onChange={(e) =>
            setOrder((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        ></input>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
