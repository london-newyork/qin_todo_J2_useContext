import type { MouseEventHandler, VFC } from "react";

type PlusBtn = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const PlusBtn: VFC<PlusBtn> = (props) => {
  return (
    <div>
      <div className="relative py-2 pr-2 pl-[5px]">
        <button
          className="
          box-border
          flex
          justify-center
          items-center
          w-6
          h-6
          bg-[#C2C6D2]
          rounded-full
          "
          onClick={props.onClick}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 7H1.5M7 1.5V7V1.5ZM7 7V12.5V7ZM7 7H12.5H7Z"
              stroke="white"
              strokeWidth="1.83333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
