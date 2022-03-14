import { useState } from "react";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { SomeTimeTitle } from "src/components/Title/SomeTimeTitle";

import { TodoItem } from "./TodoItem/TodoItem";

type Task = {
  readonly id: string;
  task?: string;
};

export const SomeTimeTodo = () => {
  const [SomeTimeTask, setSomeTimeTask] = useState<Task[]>([]);
  return (
    <div className="flex-1 w-full">
      <SomeTimeTitle />
      {SomeTimeTask.length
        ? SomeTimeTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                <TodoItem task={item.task ? item.task : ""} setTaskList={setSomeTimeTask} />
              </RadioBtnGroup>
            );
          })
        : null}
      <RadioBtnGroup>
        <TodoItem task={""} setTaskList={setSomeTimeTask} />
      </RadioBtnGroup>
    </div>
  );
};
