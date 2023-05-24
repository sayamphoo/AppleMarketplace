import { Container } from "react-bootstrap";
import Counter from "../view/counter/Counter";
import { Route, Routes } from "react-router-dom";
import Market from "../view/market/Markets";
import Background from "../view/background/Background";
import Footer from "../view/footer/Footer";
import { useEffect, useState } from "react";

function Controllers() {
  
  let counter = () => {
    return (
      <>
        <Counter />
        <Market />
        <Footer />
      </>
    );
  };

  let home = () => {
    return (
      <>
        <Background />
        <Market />
        <Footer />
      </>
    );
  };
  return (
    <Routes>
      <Route exact path="/counter" element={counter()} />
      <Route exact path="*" element={home()} />
    </Routes>
  );
}

export default Controllers;
