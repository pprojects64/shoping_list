import { useState } from "react";
import useStore from "../../utils/use-context";
import "./AmountCounter.css";

function AmountCounter() {
  const store = useStore();

  const [amount, setAmount] = useState(0);

  store.subscribe((state) => {
    setAmount(
      state.items.items.reduce((sum, item) => {
        return (sum += Number(item.price * item.amount));
      }, 0)
    );
  });

  return <span className="amount-counter">{amount + " ₽"}</span>;
}

export default AmountCounter;
