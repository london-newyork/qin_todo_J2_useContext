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
        //  const newText = e.target.value.replace(/\n/g, "")
        // if (newText.length > 200) {
        //   alert('入力可能な文字数を超えています。')
        //   return
        // }
        //   setText(newText);
        e.target.value;
      }
      return;
    },
    [todayTask]
  );

  // console.log(todayTask);

  //最大200文字まで書き込み、それ以上は入力文字数制限
  // const handleCountChange = (e: any) => {
  //     const truncate = (str:string, length:number) => {
  //       return str.length <= length ? str: alert('入力可能な文字数を超えています。');
  //     }
  //     truncate(e.target.value.length, 200)
  // }

  const handleOnKeyDown = useCallback(
    (e: any) => {
      //ここにリスト一番上に新しく入力欄が出現する処理をかく
      //何も入力せずBlurしてもリストが作成できないようにする

      const task = e.target.value;
      //エンター１回だと改行、2回で下にリスト追加され、
      //何も入力せずにエンターしてもリストが作成できないようにする
      // if (Object.keys(todayTask).length && e.key === "Enter") {
      //   return
      // }
      if (task && e.key === "Enter") {
        // e.preventDefault();
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
      }

      return;
    },
    [id, todayTask]
  );

  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      {/* 配列の逆転ループする処理をここに書く。 */}
      {Object.keys(todayTask).length
        ? todayTask.map((item: Task) => {
            return (
              <RadioBtnGroup key={item.id}>
                {!Object.keys(todayTask).length ? <PlusBtn /> : <RadioBtn variant="rose" value="task1" />}
                <textarea
                  placeholder="タスクを追加する"
                  value={item.task}
                  // onKeyUp={handleCountChange}
                  maxLength={200}
                  onChange={handleChangeTodayTask}
                  onKeyDown={handleOnKeyDown}
                  className="
                  overflow-hidden
                  mt-3
                  focus:outline-none
                  caret-[#F43F5E]
                  resize-none
                  "
                />
              </RadioBtnGroup>
            );
          })
        : null}
    </div>
  );
};
