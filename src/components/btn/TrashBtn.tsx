import { TrashIcon } from "@heroicons/react/outline";
import type { VFC } from "react";

export const TrashBtn: VFC = () => {
  return (
    <button>
      <TrashIcon className="w-5 h-5 text-baseGray-200 opacity-0 group-hover:opacity-100" />
    </button>
  );
};
