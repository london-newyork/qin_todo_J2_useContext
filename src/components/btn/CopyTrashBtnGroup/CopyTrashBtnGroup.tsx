import type { ReactNode, VFC } from "react";

export const CopyTrashBtnGroup: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div>
      <div className="flex items-start mt-[10px] space-x-2">{props.children}</div>
    </div>
  );
};
