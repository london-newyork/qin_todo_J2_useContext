import type { ReactNode, Ref, VFC } from "react";
// import { useState } from "react";
import { useRef } from "react";
import { createContext } from "react";

// const CompleteContextValue = {
//   onClick: ()=> void
// }
// export const CompleteContext = createContext(CompleteContextValue)

// export const CompleteContext = createContext<{
//   handleOnClick: () => void
//   completeRef: Ref<HTMLTextAreaElement> | undefined
// }>({ handleOnClick, completeRef: undefined });

export const CompleteContext = createContext<{
  completeRef: Ref<HTMLTextAreaElement> | undefined;
}>({ completeRef: undefined });

export const Complete: VFC<{ children: ReactNode }> = (props) => {
  const completeRef = useRef<HTMLInputElement | any>(null);
  // const [isClicked, setIsClicked] = useState(false);

  // const handleClickComplete = ():void => {
  //   setIsClicked(!isClicked);
  //   if (isClicked) {
  //     completeRef.current.className = "line-through";
  //   }
  //   if (!isClicked) {
  //     completeRef.current.className = "no-underline";
  //   }
  // };
  return (
    <CompleteContext.Provider value={{ completeRef }}>
      <div>{props.children}</div>
    </CompleteContext.Provider>
    // <CompleteContext.Provider value={{ handleOnClick: handleClickComplete , completeRef }}>
    //     <div>
    //       {props.children}
    //     </div>
    // </CompleteContext.Provider>
  );
};
