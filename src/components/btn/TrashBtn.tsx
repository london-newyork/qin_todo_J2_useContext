import { TrashIcon } from "@heroicons/react/outline";
import type { Dispatch, SetStateAction, VFC } from "react";

import type { Task } from "../../components/Todo/TodoItem/TodoItem";

type TodoItemProps = {
  id: string;
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
  taskList: Task[];
};

export const TrashBtn: VFC<TodoItemProps> = (props) => {
  const handleTrash = (e: any) => {
    e.preventDefault();

    props.setTaskList((prev) => {
      //コピー元のリストのすぐ下へコピーしたオブジェクトを入れるため、indexを指定して入れる
      const index = prev.findIndex((t) => {
        return t.id === props.id;
      });
      prev.splice(index, 1);

      return [...prev];
    });
  };
  return (
    <button onClick={handleTrash}>
      <TrashIcon
        className="
        w-5
        h-5
        text-baseGray-200
        opacity-0
        group-hover:opacity-100"
      />
    </button>
  );
};
