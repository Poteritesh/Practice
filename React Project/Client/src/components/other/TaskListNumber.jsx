import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="bg-red-400 py-6 px-9 rounded-xl w-[45%]">
        <h2 className="text-2xl font-bold">{data.taskCount.newTask}</h2>
        <h3 className="text-lg font-semibold">New tasks</h3>
      </div>
      <div className="bg-green-400 py-6 px-9 rounded-xl w-[45%]">
        <h2 className="text-2xl font-bold">{data.taskCount.completed}</h2>
        <h3 className="text-lg font-semibold">Completed</h3>
      </div>
      <div className="bg-yellow-400 py-6 px-9 rounded-xl w-[45%]">
        <h2 className="text-2xl font-bold">{data.taskCount.failed}</h2>
        <h3 className="text-lg font-semibold">Failed</h3>
      </div>
      <div className="bg-pink-400 py-6 px-9 rounded-xl w-[45%]">
        <h2 className="text-2xl font-bold">{data.taskCount.active}</h2>
        <h3 className="text-lg font-semibold">Active</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
