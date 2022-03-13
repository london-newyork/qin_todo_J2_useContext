import Image from "next/image";
import type { VFC } from "react";

// type Props = {
//   children: ReactNode;
// };

export const PlusBtn: VFC = () => {
  return (
    <div>
      <div className="relative py-2 pr-3 mt-1">
        <div className="box-border flex justify-center items-center w-[22px] h-[22px] bg-[#C2C6D2] rounded-full border-solid cursor-pointer">
          <Image alt="plus" src="/plus_icon.png" width="11px" height="11px" />
        </div>
      </div>
    </div>
  );
};
