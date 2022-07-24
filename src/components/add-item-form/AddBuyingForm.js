import "./AddBuyingForm.css";
import React, { useCallback } from "react";
import Modal from "../modal/Modal";
import useStore from "../../utils/use-context";

function AddBuyingForm(props) {
  const store = useStore();
  const { setModalIsOpen } = props;

  const handleClick = (e) => {
    if (e.target.id === "form-container") {
      setModalIsOpen(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    let amount = Number(document.querySelector(".count").textContent);

    const {
      name: { value: name },
      price: { value: price },
      unit: { value: unit },
    } = form;

    store.items.addItem({ name, price, amount, unit });
    setModalIsOpen(false);
  };

  return <Modal {...{ handleClick, handleSubmit }} add />;
}

export default AddBuyingForm;
