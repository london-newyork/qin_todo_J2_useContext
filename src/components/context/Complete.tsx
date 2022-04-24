import type { ReactNode, Ref, VFC } from "react";
import { useRef } from "react";
import { createContext } from "react";

export const CompleteContext = createContext<{
  completeRef: Ref<HTMLTextAreaElement> | undefined;
}>({ completeRef: undefined });

export const Complete: VFC<{ children: ReactNode }> = (props) => {
  const completeRef = useRef<HTMLTextAreaElement | any>(null);

  return (
    <CompleteContext.Provider value={{ completeRef }}>
      <div>{props.children}</div>
    </CompleteContext.Provider>
  );
};
