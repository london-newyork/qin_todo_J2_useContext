import { useState } from "react";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { TodayTitle } from "src/components/Title/TodayTitle";

import { TodoItem } from "./TodoItem/TodoItem";

type Task = {
  readonly id: string;
  task?: string;
};

export const TodayTodo = () => {
  const [todayTask, setTodayTask] = useState<Task[]>([]);
  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      {todayTask.length
        ? todayTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                <TodoItem task={item.task ? item.task : ""} setTaskList={setTodayTask} />
              </RadioBtnGroup>
            );
          })
        : null}
      <RadioBtnGroup>
        <TodoItem task={""} setTaskList={setTodayTask} />
      </RadioBtnGroup>
    </div>
  );
};
