import { TrashIcon } from "@heroicons/react/outline";
import type { Dispatch, SetStateAction, VFC } from "react";

import type { Task } from "../../components/Todo/TodoItem/TodoItem";

type TodoItemProps = {
  id: string;
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
  taskList: Task[] | string;
};

export const TrashBtn: VFC<TodoItemProps> = (props) => {
  const handleTrash = () => {
    props.setTaskList((prev) => {
      return prev.filter((item) => {
        return item.id !== props.id;
      });
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
