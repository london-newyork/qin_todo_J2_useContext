import Image from "next/image";
import type { VFC } from "react";

export const NewTask: VFC = () => {
  return (
    // <footer>
    <div className="flex relative flex-row items-center p-2 w-[180px] h-[40px] ">
      <div className="box-border flex absolute justify-center items-center w-[22px] h-[22px] bg-[#C2C6D2] rounded-full border-solid">
        <Image alt="plus" src="/plus_icon.png" width="11px" height="11px" />
      </div>
      <p className="relative left-5 grow-0 m-3 w-full h-5 text-[16px] not-italic font-normal leading-5 text-[#C2C6D2]">
        タスクを追加する
      </p>
    </div>
    // </footer>
  );
};
