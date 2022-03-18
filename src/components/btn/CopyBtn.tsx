import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import type { Dispatch, SetStateAction, VFC } from "react";

type Task = {
  readonly id: string;
  task?: string;
};

type TodoItemProps = {
  id: string;
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
  // onHandleDuplicate: string | number
};

export const CopyBtn: VFC<TodoItemProps> = () => {
  const handleDuplicate = (e: any) => {
    e.preventDefault();
    // props.onHandleDuplicate
  };
  return (
    <button onClick={handleDuplicate}>
      <DocumentDuplicateIcon className="w-5 h-5 opacity-0 group-hover:opacity-100" />
    </button>
  );
};
