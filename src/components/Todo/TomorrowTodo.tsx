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
  return (
    <div className="flex-1 w-full">
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
      </RadioBtnGroup>
    </div>
  );
};
