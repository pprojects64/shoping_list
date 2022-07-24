import React from "react";
import useStore from "../../utils/use-context";
import Modal from "../modal/Modal";

function ModifyItemForm(props) {
  const { setModalIsOpen, data } = props;
  const { items } = useStore();

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

    items.modifyItem(data.id, { name, price, amount, unit, id: data.id });
    setModalIsOpen(false);
  };

  return <Modal {...{ handleClick, handleSubmit, ...data }} />;
}

export default ModifyItemForm;
