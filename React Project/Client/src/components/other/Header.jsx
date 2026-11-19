import React from "react";
import { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold">
        Hello <br /> <span className="text-3xl">Arjun 😁</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
      >
        logout
      </button>
    </div>
  );
};

export default Header;
