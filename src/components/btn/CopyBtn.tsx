import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import type { Dispatch, SetStateAction, VFC } from "react";

import type { Task } from "../../components/Todo/TodoItem/TodoItem";

type TodoItemProps = {
  id: string;
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
  taskList: Task[];
};

export const CopyBtn: VFC<TodoItemProps> = (props) => {
  //  console.log('初期のProps: ',props);
  const getUniqueId = () => {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  };

  const handleDuplicate = () => {
    //複製したリストのために新しくIDを取得
    const newId = getUniqueId();
    props.setTaskList((prev) => {
      const filteredItem = prev.filter((item) => {
        item.id === props.id;
      });
      return filteredItem.concat({ id: newId, task: props.task }, ...prev);
    });
  };
  return (
    <button onClick={handleDuplicate}>
      <DocumentDuplicateIcon className="w-5 h-5 text-baseGray-200 opacity-0 group-hover:opacity-100" />
    </button>
  );
};
