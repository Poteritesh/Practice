import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className=" shrink-0 h-full w-[300px] bg-yellow-400 p-5 ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.dueDate}</h4>
      </div>
      <h2 className="text-xl font-semibold mt-2">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
