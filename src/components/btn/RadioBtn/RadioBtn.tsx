import type { VFC } from "react";
import { useState } from "react";
// import { useRef } from "react";
// import { useRef, useState } from "react";
import { useContext } from "react";
import { CompleteContext } from "src/components/context/Complete";
import { TodoItemGroupContext } from "src/components/Todo/TodoItem/TodoItemGroup";

import type { Props } from "../../type/types";
import { newColor } from "../../type/types";

export const RadioBtn: VFC<Props> = (props) => {
  const { value, setValue } = useContext(TodoItemGroupContext);
  // const { handleOnClick } = useContext(CompleteContext);
  const { completeRef } = useContext(CompleteContext);

  // TodoItemGroup内のradioBtn全てのvalueがpropsで渡ってきた、クリックされたボタンのvalueと完全一致するかどうか判定
  const isChecked = value === props.value;
  // const completeRef = useRef<HTMLInputElement | any>(null);
  const [isClicked, setIsClicked] = useState(false);
  const handleChange = () => {
    setValue?.(props.value);
    setIsClicked(!isClicked);
    if (isClicked) {
      completeRef.current.className = "line-through";
    }
    if (!isClicked) {
      completeRef.current.className = "no-underline";
    }
  };

  //   const handleClickComplete = () => {
  //   setIsClicked(!isClicked);
  //   if (isClicked) {
  //     completeRef.current.className = "line-through";
  //   }
  //   if (!isClicked) {
  //     completeRef.current.className = "no-underline";
  //   }
  // };

  return (
    <div>
      <label>
        <input
          className="
            hidden
            "
          value={props.value}
          // name={isComplete ? "complete" : ""}
          type="radio"
          checked={isChecked}
          onChange={handleChange}
          // onClick={handleOnClick}
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
          top-0
          before:left-[5px]
          after:left-[9px]
          py-4
          px-1
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
          // newColorの中のオブジェクトから取り出すときに使う[] props.variant
          ${isChecked ? `after:opacity-1 ${newColor[props.variant]}` : "after:opacity-0"}
          `}
        ></span>
      </label>
    </div>
  );
};
