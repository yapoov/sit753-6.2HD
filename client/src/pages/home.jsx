import React from "react";
import Navbar from "../components/navbar";
import FoodCard from "../components/foodCard";
import Header from "../components/header";

function Home() {
  return (
    <>
      <Header title={"Fridge"} />
      <div className="px-2">
        {Array.from("abcde").map((e) => (
          <div className="mt-2">
            <FoodCard />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
