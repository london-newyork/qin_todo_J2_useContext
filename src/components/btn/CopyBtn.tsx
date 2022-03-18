import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import type { Dispatch, SetStateAction, VFC } from "react";

type Task = {
  readonly id: string;
  task?: string;
  todayTask: string;
  setTodayTask: VoidFunction;
};

type TodoItemProps = {
  id: string;
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
  todayTask: string;
};

export const CopyBtn: VFC<TodoItemProps> = (props) => {
  const handleDuplicate = (e: any) => {
    e.preventDefault();

    //  const copiedTodayTask = props.todayTask.map((item: Task) => {
    //   return (
    //     { ...item }
    //     )
    //   })
    // console.log(copiedTodayTask.id);//undefined
    // console.log(props.id);//値が取れてる

    const newTodayTask = props.todayTask.filter((task) => {
      return task.id === props.id;
    });
    // console.log(newTodayTask);//値は取れている

    //抜き出した配列の一部を、todayTaskにセットする(TodayTodoのmapにセットされて回る)

    const JoinedTask = Object.assign(props.todayTask, newTodayTask);
    props.setTaskList(JoinedTask);

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
