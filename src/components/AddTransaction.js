import React, {useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction)
    }

  return (
    <>
      <h3>Gelir veya gider ekle </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Yazı</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Gelir veya gider ismini yazınız..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Miktar <br />
            (Gider için "-miktar" - Gelir için "+miktar" yazınız.)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Miktar giriniz..." />
        </div>
        <button className="btn">Ekle</button>
      </form>
    </>
  );
};
