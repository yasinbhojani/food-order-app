import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles["card-bg"]}>{props.children}</div>;
};

const ModalOverlay = (props) => {
  return (
    <Backdrop>
      <div className={styles.card}>{props.children}</div>;
    </Backdrop>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay children={props.children} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
