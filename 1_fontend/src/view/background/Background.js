/* eslint-disable import/no-anonymous-default-export */
import { Container } from "react-bootstrap";
import "./Background.css";
import { useEffect, useState } from "react";
export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="back">
      <h1 className="text-white pt-5">iPhone 14 Pro</h1>
      <img
        width={350}
        src="https://www.apple.com/th/iphone/home/images/overview/hero/hero_iphone_14_pro__e8bufymdlseq_small.jpg"
      />
    </div>
  );
};
