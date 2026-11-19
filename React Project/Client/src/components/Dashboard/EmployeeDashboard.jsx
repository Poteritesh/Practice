import React from "react";
import Header from "../other/Header";
import TasskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  console.log("Employee Dashboard Data:", props.data);

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TasskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
