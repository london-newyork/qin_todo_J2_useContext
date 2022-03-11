import type { VFC } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
// import { NewTask } from "src/components/NewTask";
import { TodayTitle } from "src/components/Title/TodayTitle";

type Task = {
  readonly id: string;
  index: number;
  array: string[];
  value: string;
};

export const TodayTodo: VFC = () => {
  const [todayTask, setTodayTask] = useState<Task[]>([]);

  const handleChangeTodayTask = (e: string | any) => {
    setTodayTask(() => {
      return [e.target.value];
    });
  };

  // console.log(todayTask);

  const getUniqueId = () => {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  };

  const id = getUniqueId();

  const handleOnKeyDown = useCallback(
    (e: any) => {
      if (e.key == "Enter") {
        e.preventDefault();

        const AddNewTasks = [e.target.value, ...todayTask];
        setTodayTask(AddNewTasks);
      }
      return;
    },
    [todayTask]
  );

  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      {/* <NewTask /> */}
      <RadioBtnGroup key={id}>
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
      {todayTask
        ? todayTask.map(() => {
            return (
              <RadioBtnGroup key={id}>
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
        : undefined}
    </div>
  );
};
