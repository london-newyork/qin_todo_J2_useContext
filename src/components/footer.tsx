import type { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <footer>
      <div
        className="
        py-3
        px-6
        mb-8
        w-full
        h-[60px]
        bg-white
        drop-shadow-[0_-1px_1px_rgba(0,0,0,0.12)]
      "
      >
        <input
          type="text"
          placeholder="タスクを入力する"
          className="
          py-3
          px-4
          w-full
          h-9
          text-xs
          not-italic
          font-normal
          text-[#C2C6D2]
          bg-[#F1F5F9]
          rounded-2xl"
        />
      </div>
    </footer>
  );
};
