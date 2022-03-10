import type { VFC } from "react";
import { useState } from "react";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { NewTask } from "src/components/NewTask";
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
      return e.target.value;
    });
  };

  //下へmapで追加
  // const AddNewTasks = () => {

  //   }

  const handleOnKeyPress = (e: any) => {
    if (e.key == "Enter") {
      e.preventDefault();
      //下へmapで追加

      setTodayTask(() => {
        return e.target.value;
      });
    }
  };

  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      <RadioBtnGroup>
        <RadioBtn variant="rose" value="task1">
          <ul>
            {/* <li>
              <input
                value={todayTask}
                onChange={handleChangeTodayTask}
                onKeyPress={handleOnKeyPress}
              />
            </li> */}
            {/* !prevTask ? */}
            {todayTask
              ? todayTask.map((task: Task) => {
                  return (
                    <li key={task.id}>
                      <input value={todayTask} onChange={handleChangeTodayTask} onKeyPress={handleOnKeyPress} />
                    </li>
                  );
                })
              : undefined}
          </ul>
        </RadioBtn>
      </RadioBtnGroup>
      <NewTask />
    </div>
  );
};
