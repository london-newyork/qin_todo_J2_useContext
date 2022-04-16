import { useState } from "react";
import { CopyBtn } from "src/components/btn/CopyTrashBtnGroup/CopyBtn";
import { CopyTrashBtnGroup } from "src/components/btn/CopyTrashBtnGroup/CopyTrashBtnGroup";
import { TrashBtn } from "src/components/btn/CopyTrashBtnGroup/TrashBtn";
import { PlusBtn } from "src/components/btn/PlusBtn";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { Headline } from "src/components/Title/Headline";

import type { Task } from "./TodoItem/TodoItem";
import { TodoItem } from "./TodoItem/TodoItem";

export const TomorrowTodo = () => {
  const [tomorrowTask, setTomorrowTask] = useState<Task[]>([]);
  const reversedTomorrowTask = tomorrowTask.map((_, i, a) => {
    return a[a.length - 1 - i];
  });

  return (
    <div className="flex-1 w-full">
      <Headline name="明日する" variant="orange" />
      {tomorrowTask.length
        ? reversedTomorrowTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                {item.task === "" ? <PlusBtn /> : <RadioBtn variant="orange" value="task2" />}
                <TodoItem task={item.task ? item.task : ""} setTaskList={setTomorrowTask} />
                <CopyTrashBtnGroup>
                  <CopyBtn
                    id={item.id}
                    task={item.task ? item.task : ""}
                    setTaskList={setTomorrowTask}
                    taskList={tomorrowTask}
                  />
                  <TrashBtn
                    id={item.id}
                    task={item.task ? item.task : ""}
                    setTaskList={setTomorrowTask}
                    taskList={tomorrowTask}
                  />
                </CopyTrashBtnGroup>
              </RadioBtnGroup>
            );
          })
        : null}
      <RadioBtnGroup>
        <PlusBtn />
        <TodoItem task={""} setTaskList={setTomorrowTask} />
      </RadioBtnGroup>
    </div>
  );
};
