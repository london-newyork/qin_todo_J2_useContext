// import type { KeyboardEventHandler} from "react";
import { useState } from "react";
import { CopyBtn } from "src/components/btn/CopyBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { TrashBtn } from "src/components/btn/TrashBtn";
import { TodayTitle } from "src/components/Title/TodayTitle";

import { TodoItem } from "./TodoItem/TodoItem";

type Task = {
  readonly id: string;
  task?: string;
};

export const TodayTodo = () => {
  const [todayTask, setTodayTask] = useState<Task[]>([]);

  // const handleDuplicate = () => {
  //   alert("Duplicate");
  // };
  // const handleTrash = () => {
  //   alert("Trash");
  // };

  // const onHandleDuplicate = (e: KeyboardEventHandler<HTMLTextAreaElement> | undefined | any,) => {
  //   e.preventDefault()
  //新しく配列を作成
  // const copiedTodayTask = todayTask.map((item: Task) => {
  //   return (
  //     { ...item }
  //     )
  //   })
  // console.log(copiedTodayTask, id);

  //今のtaskのidが新しい配列アイテムのidと一致したら該当taskを返す
  // if (copiedTodayTask.id === id) {
  //   copiedTodayTask.map((copiedItem) => {
  //     return ({ ...copiedItem })
  //   })
  //  return
  // }
  // }

  //   const handleDuplicate = (e) => {
  //   e.preventDefault()
  //   // props.onHandleDuplicate
  // }

  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      {todayTask.length
        ? todayTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                <TodoItem task={item.task ? item.task : ""} setTaskList={setTodayTask} />
                <div className="flex pb-3 m-auto space-x-4">
                  <CopyBtn
                    // onHandleDuplicate={onHandleDuplicate}
                    id={item.id}
                    task={item.task ? item.task : ""}
                    setTaskList={setTodayTask}
                  />
                  <TrashBtn />
                </div>
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
