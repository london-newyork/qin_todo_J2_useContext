import type { VFC } from "react";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { PlusBtn } from "src/components/PlusBtn";
import { TomorrowTitle } from "src/components/Title/TomorrowTitle";

export const TomorrowTodo: VFC = () => {
  return (
    <div className="flex-1 w-full">
      <TomorrowTitle />
      <RadioBtnGroup>
        <RadioBtn variant="orange" value="task2" />
        ESLintをインストール
      </RadioBtnGroup>
      <PlusBtn />
    </div>
  );
};
