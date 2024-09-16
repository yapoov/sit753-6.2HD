import React from "react";

function Header({ title }) {
  return (
    <div className="w-full bg-teal-300  h-48 flex flex-col justify-end">
      <p className=" pb-4 pl-4 uppercase text-5xl text-white  font-bold">
        {title}
      </p>
    </div>
  );
}

export default Header;
