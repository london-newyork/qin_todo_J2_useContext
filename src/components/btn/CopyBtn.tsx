import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import type { Dispatch, SetStateAction, VFC } from "react";
import { useState } from "react";

type Task = {
  readonly id: string;
  task?: string;
  todayTask: string;
  // setTodayTask: VoidFunction;
};

type TodoItemProps = {
  id: string;
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
  todayTask: string;
  // setTodayTask: VoidFunction;
};

export const CopyBtn: VFC<TodoItemProps> = (props) => {
  const [task, setTask] = useState<string>("");

  // console.log(props);値取れてる

  const getUniqueId = () => {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  };

  const handleDuplicate = (e: any) => {
    e.preventDefault();

    //  const copiedTodayTask = props.todayTask.map((item: Task) => {
    //   return (
    //     { ...item }
    //     )
    //   })
    // console.log(copiedTodayTask.id);//undefined
    // console.log(props.id);//値が取れてる

    //元の配列を複製
    const newTodayTask = props.todayTask.filter((item) => {
      //現在のIDを取得して複製した配列と一致するIDがあったときにそのitemを返す
      const currentId = props.id;
      if (item.id === currentId) {
        return item.task;
      }
      // console.log(item);
    });
    // console.log(newTodayTask);//値は取れている

    //newTodayTaskから抜き出した配列の一部を、todayTaskにセットする(TodayTodoのmapにセットされて回る)
    const JoinedTask = Object.assign(props.todayTask, newTodayTask);
    props.setTaskList(JoinedTask);

    //複製したリストのために新しくIDを取得
    const newId = getUniqueId();
    props.setTaskList((prev) => {
      return [{ id: newId, task }, ...prev];
    });

    setTask(JoinedTask);

    //今のtaskのidが新しい配列アイテムのidと一致したら該当taskを返す
    // if (copiedTodayTask.id === props.id) {
    //   copiedTodayTask.map((copiedItem) => {
    //     return ({ ...copiedItem })
    //   })
    //   return
    // }
  };

  return (
    <button onClick={handleDuplicate}>
      <DocumentDuplicateIcon className="w-5 h-5 opacity-0 group-hover:opacity-100" />
    </button>
  );
};
