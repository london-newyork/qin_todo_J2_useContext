import { useState } from "react";
import { CopyBtn } from "src/components/btn/CopyBtn";
import { PlusBtn } from "src/components/btn/PlusBtn";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { TrashBtn } from "src/components/btn/TrashBtn";
import { SomeTimeTitle } from "src/components/Title/SomeTimeTitle";

import type { Task } from "./TodoItem/TodoItem";
import { TodoItem } from "./TodoItem/TodoItem";

export const SomeTimeTodo = () => {
  const [someTimeTask, setSomeTimeTask] = useState<Task[]>([]);
  const reversedSomeTimeTask = someTimeTask.map((_, i, a) => {
    return a[a.length - 1 - i];
  });

  return (
    <div className="flex-1 w-full">
      <SomeTimeTitle />
      {someTimeTask.length
        ? reversedSomeTimeTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                {item.task === "" ? <PlusBtn /> : <RadioBtn variant="yellow" value="task3" />}
                <TodoItem task={item.task ? item.task : ""} setTaskList={setSomeTimeTask} />
                <div className="flex items-start mt-3 space-x-4">
                  <CopyBtn
                    id={item.id}
                    task={item.task ? item.task : ""}
                    setTaskList={setSomeTimeTask}
                    taskList={someTimeTask}
                  />
                  <TrashBtn
                    id={item.id}
                    task={item.task ? item.task : ""}
                    setTaskList={setSomeTimeTask}
                    taskList={someTimeTask}
                  />
                </div>
              </RadioBtnGroup>
            );
          })
        : null}
      <RadioBtnGroup>
        <PlusBtn />
        <TodoItem task={""} setTaskList={setSomeTimeTask} />
      </RadioBtnGroup>
    </div>
  );
};
