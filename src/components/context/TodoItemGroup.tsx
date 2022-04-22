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
      <label htmlFor="complete">
        <div>{props.children}</div>
      </label>
    </TodoItemGroupContext.Provider>
  );
};
