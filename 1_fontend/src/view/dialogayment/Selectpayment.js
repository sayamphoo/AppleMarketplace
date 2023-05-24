import "./salectpayment.css";
import kBank from "../img/new-k-plus-logo.png";
import promptpay from "../img/promptpay.png";
function Selectpayment(props) {
  const select = [
    {
      name: "K-Plus",
      img: kBank,
    },
    {
      name: "Prompt pay",
      img: promptpay,
    },
  ];

  const item = select.map((item, index) => {
    return (
      <div key={index} className="item" onClick={() => props.callback(item.img,item.name)}>
        <img src={item.img} alt="sssa" />
        <p>{item.name}</p>
      </div>
    );
  });

  return (
    <div className="contain">
      <div className="paymentContainer">
        <div className="containers">
          <p>Select payment</p>
          <div className="select">{item}</div>
        </div>
      </div>
    </div>
  );
}

export default Selectpayment;
