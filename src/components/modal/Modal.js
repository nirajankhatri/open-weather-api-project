import React from "react";
import "../../style/components/_modal.scss";
import Controls from "../controls/Controls";
import Header from "../header/Header";

const Modal = () => {
  return (
    <div className="modal">
      <Header />
      <Controls />
    </div>
  );
};

export default Modal;
