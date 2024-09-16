import React, { useState } from "react";
import "../App.css";
import InputField from "../components/inputField";
import Header from "../components/header";
import api from "../api";

const ManualItemEntry = () => {
  const [itemName, setItemName] = useState("");
  const [itemNameError, setItemNameError] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setItemNameError("");

    if (!itemName) {
      setItemNameError("please enter item name");
      return;
    }

    try {
      const res = await api.post("/items", {
        name: itemName,
        expiryDate,
        purchaseDate,
        quantity: 1,
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
      } else {
      }
    } catch (e) {}
    setItemName("");
    setExpiryDate("");
  };

  return (
    <div className="h-screen flex flex-col bg-yellow-50 justify-start">
      <Header title={"add item manually"} />
      <div className=" p-4">
        <div className="text-xl">
          <form onSubmit={handleSubmit}>
            <div className="px-4 py-8 bg-white rounded-3xl border-2  ">
              <div className="flex flex-col">
                <div className="flex justify-between max-w-sm">
                  <label className="pr-4">Name</label>
                  <input
                    className=" border-b-2 text-center border-teal-500"
                    placeholder={"Item name"}
                    error={itemNameError}
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </div>
                {itemNameError && (
                  <p className="text-red-500 pt-4">{itemNameError}</p>
                )}
              </div>

              <div className="relative my-4  max-w-sm flex items-baseline justify-between">
                <label className="pr-4">Expiry date </label>
                <input
                  type="date"
                  class=" bg-teal-100 px-4 py-2 rounded-lg"
                  placeholder="Select date"
                  onChange={(e) => setExpiryDate(e.target.value)}
                ></input>
              </div>
              <div class="relative my-4 flex max-w-sm items-baseline justify-between">
                <label className="pr-4">Purchase date </label>
                <input
                  type="date"
                  class=" bg-teal-100  px-4 py-2 rounded-lg"
                  placeholder="Select date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                ></input>
              </div>
            </div>
            <button
              type="submit"
              className="text-white my-4 font-bold uppercase text-xl w-full p-3 border-2 border-teal-600  rounded-full bg-teal-500"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManualItemEntry;
