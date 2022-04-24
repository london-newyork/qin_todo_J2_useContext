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

export const TomorrowTodo = () => {
  const [tomorrowTask, setTomorrowTask] = useState<Task[]>([]);
  const reversedTomorrowTask = tomorrowTask.map((_, i, a) => {
    return a[a.length - 1 - i];
  });

  //   const handleOnClick = () => {
  //   //
  // };

  return (
    <div>
      <Headline name="明日する" variant="orange" />
      {tomorrowTask.length
        ? reversedTomorrowTask.map((item: Task) => {
            return (
              <TodoItemGroup key={item.id}>
                <Complete>
                  <TodoLayouts>
                    <RadioBtn variant="yellow" value="task3" />
                    <TodoItem id={item.id} task={item.task ? item.task : ""} setTaskList={setTomorrowTask} />
                    <CopyTrashBtnLayouts>
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
                    </CopyTrashBtnLayouts>
                  </TodoLayouts>
                </Complete>
              </TodoItemGroup>
            );
          })
        : null}
      {tomorrowTask.length === 0 ? (
        <TodoItemGroup>
          <TodoLayouts>
            <PlusBtn />
            <TodoItem task={""} setTaskList={setTomorrowTask} />
          </TodoLayouts>
        </TodoItemGroup>
      ) : null}
    </div>
  );
};
