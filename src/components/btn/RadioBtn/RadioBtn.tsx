import type { ReactNode, VFC } from "react";
import { useState } from "react";

export const RadioBtn: VFC<{ children: ReactNode }> = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => {
    setIsChecked(e.target.value);
  };

  return (
    <div>
      <label htmlFor="radio1">
        <input
          className="
                    hidden
                    "
          id="radio1"
          name="radioBtn"
          type="radio"
          onClick={handleChange}
          checked
        />
        <span
          className={`
                        relative
                        box-border
                        inline-block
                        before:block
                        after:block
                        before:absolute
                        after:absolute
                        before:top-[45%]
                        after:top-[45%]
                        top-[4px]
                        before:left-[5px]
                        after:left-[9px]
                        py-[30px]
                        px-[5px]
                        before:mr-[6px]
                        w-auto
                        before:w-6
                        after:-mt-1
                        after:w-4
                        before:-mt-2
                        before:h-6
                        after:h-4
                        before:content-['']
                        after:content-['']
                        before:bg-white
                        before:rounded-full
                        after:rounded-full
                        before:border-2
                        before:border-baseGray-200
                        before:border-solid
                        cursor-pointer
                        pl-9
                        ${isChecked ? "after:opacity-1 after:bg-primary-rose before:border-primary-rose" : ""}
                `}
        >
          {props.children}
        </span>
      </label>
    </div>
  );
};
