import { DocumentDuplicateIcon, TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { TomorrowTitle } from "src/components/Title/TomorrowTitle";

import { TodoItem } from "./TodoItem/TodoItem";

type Task = {
  readonly id: string;
  task?: string;
};

export const TomorrowTodo = () => {
  const [TomorrowTask, setTomorrowTask] = useState<Task[]>([]);
  const handleDuplicate = () => {
    alert("Duplicate");
  };
  const handleTrash = () => {
    alert("Trash");
  };
  return (
    <div className="group flex-1 w-full">
      <TomorrowTitle />
      {TomorrowTask.length
        ? TomorrowTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                <TodoItem task={item.task ? item.task : ""} setTaskList={setTomorrowTask} />
              </RadioBtnGroup>
            );
          })
        : null}
      <RadioBtnGroup>
        <TodoItem task={""} setTaskList={setTomorrowTask} />
        <div className="flex pb-3 m-auto space-x-4 opacity-0 group-hover:opacity-100">
          <DocumentDuplicateIcon className="w-5 h-5" onClick={handleDuplicate} />
          <TrashIcon className="w-5 h-5" onClick={handleTrash} />
        </div>
      </RadioBtnGroup>
    </div>
  );
};
