import { useState } from "react";
import { CopyBtn } from "src/components/btn/CopyTrashBtnGroup/CopyBtn";
import { TrashBtn } from "src/components/btn/CopyTrashBtnGroup/TrashBtn";
import { PlusBtn } from "src/components/btn/PlusBtn";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { Complete } from "src/components/context/Complete";
import { TodoItemGroup } from "src/components/context/TodoItemGroup";
import { CopyTrashBtnLayouts } from "src/components/layouts/CopyTrashBtnLayouts";
import { TodoLayouts } from "src/components/layouts/TodoLayouts";
import { Headline } from "src/components/Title/Headline";

import type { Task } from "./TodoItem/TodoItem";
import { TodoItem } from "./TodoItem/TodoItem";

export const SomeTimeTodo = () => {
  const [someTimeTask, setSomeTimeTask] = useState<Task[]>([]);
  const reversedSomeTimeTask = someTimeTask.map((_, i, a) => {
    return a[a.length - 1 - i];
  });

  const handlePlusBtnAddNewTask = () => {
    //
  };

  return (
    <div>
      <Headline name="今度する" variant="yellow" />
      {someTimeTask.length
        ? reversedSomeTimeTask.map((item: Task) => {
            return (
              <TodoItemGroup key={item.id}>
                <Complete>
                  <TodoLayouts>
                    {item.task === "" ? (
                      <PlusBtn onClick={handlePlusBtnAddNewTask} />
                    ) : (
                      <RadioBtn variant="yellow" value="task3" />
                    )}
                    <TodoItem task={item.task ? item.task : ""} setTaskList={setSomeTimeTask} />
                    <CopyTrashBtnLayouts>
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
                    </CopyTrashBtnLayouts>
                  </TodoLayouts>
                </Complete>
              </TodoItemGroup>
            );
          })
        : null}
      <TodoItemGroup>
        <TodoLayouts>
          <PlusBtn onClick={handlePlusBtnAddNewTask} />
          <TodoItem task={""} setTaskList={setSomeTimeTask} />
        </TodoLayouts>
      </TodoItemGroup>
    </div>
  );
};
