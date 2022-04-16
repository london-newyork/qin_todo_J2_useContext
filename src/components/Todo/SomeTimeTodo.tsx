import { useState } from "react";
import { CopyBtn } from "src/components/btn/CopyTrashBtnGroup/CopyBtn";
import { CopyTrashBtnGroup } from "src/components/btn/CopyTrashBtnGroup/CopyTrashBtnGroup";
import { TrashBtn } from "src/components/btn/CopyTrashBtnGroup/TrashBtn";
import { PlusBtn } from "src/components/btn/PlusBtn";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { Headline } from "src/components/Title/Headline";
import { TodoItemGroup } from "src/components/Todo/TodoItem/TodoItemGroup";

import type { Task } from "./TodoItem/TodoItem";
import { TodoItem } from "./TodoItem/TodoItem";

export const SomeTimeTodo = () => {
  const [someTimeTask, setSomeTimeTask] = useState<Task[]>([]);
  const reversedSomeTimeTask = someTimeTask.map((_, i, a) => {
    return a[a.length - 1 - i];
  });

  return (
    <div>
      <Headline name="今度する" variant="yellow" />
      {someTimeTask.length
        ? reversedSomeTimeTask.map((item: Task) => {
            return (
              <TodoItemGroup key={item.id}>
                {item.task === "" ? <PlusBtn /> : <RadioBtn variant="yellow" value="task3" />}
                <TodoItem task={item.task ? item.task : ""} setTaskList={setSomeTimeTask} />
                <CopyTrashBtnGroup>
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
                </CopyTrashBtnGroup>
              </TodoItemGroup>
            );
          })
        : null}
      <TodoItemGroup>
        <PlusBtn />
        <TodoItem task={""} setTaskList={setSomeTimeTask} />
      </TodoItemGroup>
    </div>
  );
};
