import type { Dispatch, ReactNode, SetStateAction, VFC } from "react";
import { createContext, useState } from "react";

export const RadioBtnGroupContext = createContext<{
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>> | null;
}>({ value: null, setValue: null });

export const RadioBtnGroup: VFC<{ children: ReactNode }> = (props) => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <RadioBtnGroupContext.Provider value={{ value, setValue }}>
      <div className="group flex flex-row items-start pl-2 mt-2">{props.children}</div>
    </RadioBtnGroupContext.Provider>
  );
};
