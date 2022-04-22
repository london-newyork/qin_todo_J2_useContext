import type { ReactNode, VFC } from "react";

export const TodoLayouts: VFC<{ children: ReactNode }> = (props) => {
  return (
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
  );
};
