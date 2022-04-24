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

export const TodayTodo = () => {
  const [todayTask, setTodayTask] = useState<Task[]>([]);
  const reversedTodayTask = todayTask.map((_, i, a) => {
    return a[a.length - 1 - i];
  });

  // const handleOnClick = () => {
  //   //
  // };

  return (
    <div>
      <Headline name="今日する" variant="rose" />
      {todayTask.length
        ? reversedTodayTask.map((item: Task) => {
            return (
              <TodoItemGroup key={item.id}>
                <Complete>
                  <TodoLayouts>
                    <RadioBtn variant="yellow" value="task3" />
                    <TodoItem id={item.id} task={item.task ? item.task : ""} setTaskList={setTodayTask} />
                    <CopyTrashBtnLayouts>
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
                    </CopyTrashBtnLayouts>
                  </TodoLayouts>
                </Complete>
              </TodoItemGroup>
            );
          })
        : null}
      <TodoItemGroup>
        <TodoLayouts>
          <PlusBtn />
          <TodoItem task={""} setTaskList={setTodayTask} />
        </TodoLayouts>
      </TodoItemGroup>
    </div>
  );
};
