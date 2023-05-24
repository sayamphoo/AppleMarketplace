/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import "./CapacityTag.css";

export default (props) => {

  const { data, onClick, selects } = props;
  let [select, setSelect] = useState(selects);
  useEffect(() => {
    setSelect(selects);
    window.scrollTo(0, 0)
  }, [props]);

  return (
    <div
      onClick={onClick}
      className={(select === data ? "border pricqe-tag pricqe-tag-select" : "border pricqe-tag")}
    >
      <p className="px-4 py-2 m-0 ">{data}</p>
    </div>
  );
};
