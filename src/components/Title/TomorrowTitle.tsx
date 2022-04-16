import type { VFC } from "react";

export const TomorrowTitle: VFC = () => {
  return (
    //見出しコンポーネント(明日する)を作成
    <div className="m-4">
      <div>
        <h1
          className="
                font-mono
                text-22px
                text-secondary-orange"
        >
          明日する
        </h1>
      </div>
    </div>
  );
};
