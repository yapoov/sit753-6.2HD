import React, { useEffect, useState } from "react";
import FoodCard from "../components/foodCard";
import Header from "../components/header";
import api from "../api";

function Home() {
  const [items, setItems] = useState([]);

  const handleDelete = async (item) => {
    try {
      const res = await api.delete(`/items/${item.name}`);

      setItems(
        items.filter(function (e) {
          return e !== item;
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
  const fetchItems = async () => {
    try {
      const res = await api.get("/items");
      setItems(res.data.data);
    } catch (e) {}
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <Header title={"Fridge"} />
      <div className="px-2">
        {items.map((item) => (
          <div className="mt-2">
            <FoodCard item={item} onClickDelete={handleDelete} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
