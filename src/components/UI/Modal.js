import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles["card-bg"]} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

const Modal = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay children={props.children} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
