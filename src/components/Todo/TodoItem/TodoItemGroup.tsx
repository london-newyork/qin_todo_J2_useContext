import type { Dispatch, ReactNode, SetStateAction, VFC } from "react";
import { createContext, useState } from "react";

export const TodoItemGroupContext = createContext<{
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>> | null;
}>({ value: null, setValue: null });

export const TodoItemGroup: VFC<{ children: ReactNode }> = (props) => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <TodoItemGroupContext.Provider value={{ value, setValue }}>
      <div
        className="
        group
        flex
        flex-row
        items-start
        pl-2
        mt-2
        w-[12rem]"
      >
        {props.children}
      </div>
    </TodoItemGroupContext.Provider>
  );
};
