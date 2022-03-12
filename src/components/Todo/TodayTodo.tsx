import type { SetStateAction, VFC } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
// import { NewTask } from "src/components/NewTask";
import { TodayTitle } from "src/components/Title/TodayTitle";

type Task = {
  readonly id: string;
  index: number;
  task?: string;
};

export const TodayTodo: VFC = () => {
  const [todayTask, setTodayTask] = useState<SetStateAction<string[] | Task[]>>([""]);
  const [isOnMouse] = useState<boolean>(false);

  const getUniqueId = () => {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  };
  const id = getUniqueId();

  const renderFlgRef = useRef(true);

  const handleChangeTodayTask = useCallback(
    (e: string | any) => {
      //再レンダリング防止処理
      if (renderFlgRef.current) {
        renderFlgRef.current = false;

        const task = e.target.value;
        const AddNewTasks = [
          {
            id,
            task,
          },
          ...todayTask,
        ];
        // const StringifiedObj = JSON.stringify(AddNewTasks, null, '\t' )
        setTodayTask(AddNewTasks);
      }
      return;
    },
    [todayTask]
  );

  // console.log(todayTask);

  const handleOnKeyDown = useCallback(
    (e: any) => {
      const task = e.target.value;
      if (e.key === "Enter") {
        e.preventDefault();
        const EnteredTask = [
          {
            id,
            task,
          },
          ...todayTask,
        ];
        setTodayTask(() => {
          return EnteredTask;
        });
      }
      return;
    },
    [id, todayTask]
  );

  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      {/* <NewTask /> */}
      {!isOnMouse
        ? todayTask.map((task: Task) => {
            return (
              <RadioBtnGroup key={task.id}>
                <RadioBtn variant="rose" value="task1">
                  <input
                    placeholder="タスクを追加する"
                    value={todayTask}
                    onChange={handleChangeTodayTask}
                    onKeyDown={handleOnKeyDown}
                    className="
                      focus:outline-none
                      caret-[#F43F5E]
                      "
                  />
                </RadioBtn>
              </RadioBtnGroup>
            );
          })
        : null}
    </div>
  );
};
