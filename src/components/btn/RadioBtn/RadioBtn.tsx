import type { VFC } from "react";
import { useContext } from "react";
import { RadioBtnGroupContext } from "src/components/btn/RadioBtn/RadioBtnGroup";

const newColor = {
  rose: "after:bg-primary-rose before:border-primary-rose",
  orange: "after:bg-secondary-orange before:border-secondary-orange",
  yellow: "after:bg-tertiary-yellow before:border-tertiary-yellow",
} as const;

type Props = {
  variant: keyof typeof newColor; //newColorを型として扱いさらにこの中からkeyとしても使う（newColorの中身が増えた時に便利）
  // children: ReactNode;
  value: string;
};

export const RadioBtn: VFC<Props> = (props) => {
  const { value, setValue } = useContext(RadioBtnGroupContext);

  // radioBtnGroup内のradioBtn全てのvalueがpropsで渡ってきた、クリックされたボタンのvalueと完全一致するかどうか判定
  const isChecked = value === props.value;

  const handleChange = () => {
    setValue?.(props.value);
  };

  return (
    <div>
      <label>
        <input
          className="
            hidden
            "
          value={props.value}
          name="radioBtn"
          type="radio"
          checked={isChecked}
          onChange={handleChange}
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
          py-4
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
          // newColorの中のオブジェクトから取り出すときに使う[] props.variant
          ${isChecked ? `after:opacity-1 ${newColor[props.variant]}` : "after:opacity-0"}
          `}
        ></span>
      </label>
    </div>
  );
};
