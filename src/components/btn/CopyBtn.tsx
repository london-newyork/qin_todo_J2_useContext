import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import type { Dispatch, SetStateAction, VFC } from "react";

import type { Task } from "../../components/Todo/TodoItem/TodoItem";

type TodoItemProps = {
  id: string;
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
  todayTask: Task[];
};

export const CopyBtn: VFC<TodoItemProps> = (props) => {
  const getUniqueId = () => {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  };

  const handleDuplicate = (e: any) => {
    e.preventDefault();

    //複製したリストのために新しくIDを取得
    const newId = getUniqueId();
    props.setTaskList((prev) => {
      //コピー元のリストのすぐ下へコピーしたオブジェクトを入れるため、indexを指定して入れる
      const index = prev.findIndex((t) => {
        return t.id === props.id;
      });
      prev.splice(index, 0, { id: newId, task: props.task });

      return [...prev];
    });
  };

  return (
    <button onClick={handleDuplicate}>
      <DocumentDuplicateIcon className="w-5 h-5 opacity-0 group-hover:opacity-100" />
    </button>
  );
};
