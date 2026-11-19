import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashbord = (props) => {
  return (
    <div className="min-h-screen bg-black p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
      {/* Form Container */}
    </div>
  );
};

export default AdminDashbord;
