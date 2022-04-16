import type { ReactNode, VFC } from "react";

export const CopyTrashBtnGroup: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div>
      <div
        className="
        flex
        gap-3
        justify-between
        items-start
        mt-[10px]"
      >
        {props.children}
      </div>
    </div>
  );
};
