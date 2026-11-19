import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded border border-gray-900">
      <div className="bg-emerald-600 mb-2 py-2 px-4 flex justify-between">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5 ">Completed</h5>
        <h5 className="w-1/5 ">Failed</h5>
      </div>
      <div className="">
        {userData.map((e, idx) => {
          return (
            <div
              key={idx}
              className="bg-emerald-950 mb-2 py-2 px-4 flex justify-between"
            >
              <h2 className="w-1/5 text-white">{e.firstName}</h2>
              <h3 className="w-1/5 text-blue-600">{e.taskCount.newTask}</h3>
              <h5 className="w-1/5 text-shadow-pink-900">
                {e.taskCount.active}
              </h5>
              <h5 className="w-1/5 text-yellow-400">{e.taskCount.completed}</h5>
              <h5 className="w-1/5 text-green-600">{e.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
