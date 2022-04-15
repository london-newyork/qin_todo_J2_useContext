import { useState } from "react";
import { CopyBtn } from "src/components/btn/CopyBtn";
import { PlusBtn } from "src/components/btn/PlusBtn";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { TrashBtn } from "src/components/btn/TrashBtn";
import { TodayTitle } from "src/components/Title/TodayTitle";

import type { Task } from "./TodoItem/TodoItem";
import { TodoItem } from "./TodoItem/TodoItem";

export const TodayTodo = () => {
  const [todayTask, setTodayTask] = useState<Task[]>([]);
  const reversedTodayTask = todayTask.map((_, i, a) => {
    return a[a.length - 1 - i];
  });

  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      {todayTask.length
        ? reversedTodayTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                {item.task === "" ? <PlusBtn /> : <RadioBtn variant="rose" value="task3" />}
                <TodoItem task={item.task ? item.task : ""} setTaskList={setTodayTask} />
                <div className="flex items-start mt-3 space-x-4">
                  <CopyBtn
                    id={item.id}
                    task={item.task ? item.task : ""}
                    setTaskList={setTodayTask}
                    taskList={todayTask}
                  />
                  <TrashBtn
                    id={item.id}
                    task={item.task ? item.task : ""}
                    setTaskList={setTodayTask}
                    taskList={todayTask}
                  />
                </div>
              </RadioBtnGroup>
            );
          })
        : null}
      <RadioBtnGroup>
        <PlusBtn />
        <TodoItem task={""} setTaskList={setTodayTask} />
      </RadioBtnGroup>
    </div>
  );
};
