import type { VFC } from "react";
import { RadioBtn } from "src/components/btn/RadioBtn/RadioBtn";
import { RadioBtnGroup } from "src/components/btn/RadioBtn/RadioBtnGroup";
import { NewTask } from "src/components/NewTask";
import { TodayTitle } from "src/components/Title/TodayTitle";

export const TodayTodo: VFC = () => {
  return (
    <div className="flex-1 w-full">
      <TodayTitle />
      <RadioBtnGroup>
        <RadioBtn variant="rose" value="task1">
          Next.jsをインストール
        </RadioBtn>
      </RadioBtnGroup>
      <NewTask />
    </div>
  );
};
