import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData;

    data.forEach((e) => {
      if (asignTo == e.firstName) {
        e.tasks.push(newTask);
        e.taskCount.newTask = e.taskCount.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  };

  return (
    <div className="mt-10 rounded-xl bg-[#1c1c1c] p-8 border border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-8">
        Create New Task
      </h2>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Side */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            type="text"
            placeholder="Enter Task Title"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white outline-none border border-gray-700 focus:border-blue-500"
          />

          <h3 className="mt-3 text-white">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value);
            }}
            type="date"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white outline-none border border-gray-700 focus:border-blue-500"
          />

          <h3 className="mt-3 text-white">Assign Task</h3>
          <input
            value={asignTo}
            onChange={(e) => {
              setAsignTo(e.target.value);
            }}
            type="text"
            placeholder="Employee Name"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white outline-none border border-gray-700 focus:border-blue-500"
          />

          <h3 className="mt-3 text-white">Category</h3>
          <input
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            type="text"
            placeholder="Design, Dev, etc."
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white outline-none border border-gray-700 focus:border-blue-500"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white">Task Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            placeholder="Enter Task Description"
            className="w-full h-64 p-3 rounded-lg bg-[#2a2a2a] text-white outline-none border border-gray-700 focus:border-blue-500 resize-none"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg mt-auto hover:bg-blue-600 transition-colors"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
