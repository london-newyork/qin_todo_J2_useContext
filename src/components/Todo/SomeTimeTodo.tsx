import { useState } from "react";
import { CopyBtn } from "src/components/btn/CopyBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { TrashBtn } from "src/components/btn/TrashBtn";
import { SomeTimeTitle } from "src/components/Title/SomeTimeTitle";

import type { Task } from "./TodoItem/TodoItem";
import { TodoItem } from "./TodoItem/TodoItem";

export const SomeTimeTodo = () => {
  const [someTimeTask, setSomeTimeTask] = useState<Task[]>([]);

  return (
    <div className="flex-1 w-full">
      <SomeTimeTitle />
      {someTimeTask.length
        ? someTimeTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                <TodoItem task={item.task ? item.task : ""} setTaskList={setSomeTimeTask} />
                <div className="flex pb-3 m-auto space-x-4">
                  <CopyBtn
                    id={item.id}
                    task={item.task ? item.task : ""}
                    setTaskList={setSomeTimeTask}
                    taskList={someTimeTask}
                  />
                  <TrashBtn />
                </div>
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
