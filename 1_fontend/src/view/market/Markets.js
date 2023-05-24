import { Link } from "react-router-dom";
import data from "../../repository/market.json";
import "./Markets.css";
import { Container } from "react-bootstrap";

export default () => {
  const card = data.map((item, index) => {
    return (
      <div key={index} className="market-card">
        <p className="mb-4">{item.name}</p>
        <img height={200} src={item.img} />
        <div className="card-detail p-2 mt-3">
          <p>From ฿{item.description?.price[0]}</p>
          <Link to="/counter" state={item} className="buy">
            ซื้อแลย
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="mt-5">
      <Container>
        <h2 className="mb-4">iPhone รุ่นไหนที่ใช่สำหรับคุณ</h2>
      </Container>
      <div className="market y-scroll">{card}</div>
    </div>
  );
};
