import type { ReactNode,VFC } from "react";

export const BtnArea: VFC<{ children: ReactNode }> = (props) => {
  return <div className="flex">{props.children}</div>;
};
