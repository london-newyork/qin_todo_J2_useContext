import type { SetStateAction, VFC } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { PlusBtn } from "src/components/PlusBtn";
import { TodayTitle } from "src/components/Title/TodayTitle";

type Task = {
  readonly id: string;
  index: number;
  task?: string;
};

export const TodayTodo: VFC = () => {
  const [todayTask, setTodayTask] = useState<SetStateAction<string[] | Task[]>>([{}]);

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
        e.target.value;
      }
      return;
    },
    [todayTask]
  );

  // console.log(todayTask);

  const handleChangeIcon = () => {
    // console.log('clickされたよ');
  };

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
          // return EnteredTask.map((_, i, a) => { return a[a.length -1 - i]})
          // return EnteredTask.sort((a, b) => {
          //   return b.grades - a.grades
          // })
          // return EnteredTask.sort((a,b)=>{return b[0] - a[0]})
          return EnteredTask;
        });
        // console.log('エンターキーです');
      }
      return;
    },
    [id, todayTask]
  );

  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      {Object.keys(todayTask).length
        ? todayTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                {!Object.keys(todayTask).length ? <PlusBtn /> : <RadioBtn variant="rose" value="task1" />}
                <input
                  placeholder="タスクを追加する"
                  value={item.task}
                  onClick={handleChangeIcon}
                  onChange={handleChangeTodayTask}
                  onKeyDown={handleOnKeyDown}
                  className="
                  pt-1
                  focus:outline-none
                  caret-[#F43F5E]
                  "
                />
              </RadioBtnGroup>
            );
          })
        : null}
    </div>
  );
};
