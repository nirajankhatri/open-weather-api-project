import React from "react";
import "../../style/components/_error_dialog.scss";

const Error_Dialog = (props) => {
  return (
    <div className="errorDialogContainer">
      <h1 className="errorDialog">{props.errorMessage}</h1>
    </div>
  );
};

export default Error_Dialog;
