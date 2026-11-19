import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 rounded-xl mt-10"
    >
      {data.tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptTask key={e.id ?? idx} data={e} />;
        }

        if (e.completed) {
          return <CompleteTask key={e.id ?? idx} data={e} />;
        }

        if (e.failed) {
          return <FailedTask key={e.id ?? idx} data={e} />;
        }

        if (e.newTask) {
          return <NewTask key={e.id ?? idx} data={e} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
