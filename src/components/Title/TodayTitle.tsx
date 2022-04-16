import type { VFC } from "react";

export const TodayTitle: VFC = () => {
  return (
    //見出しコンポーネント(今日する)を作成
    <div className="m-4">
      <div>
        <h1
          className="
                font-mono
                text-22px
                text-primary-rose"
        >
          今日する
        </h1>
      </div>
    </div>
  );
};
