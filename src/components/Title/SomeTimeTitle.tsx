import type { VFC } from "react";

export const SomeTimeTitle: VFC = () => {
  return (
    //見出しコンポーネント(今度する)を作成
    <div className="m-4">
      <div>
        <h1
          className="
                font-mono
                text-22px
                text-tertiary-yellow"
        >
          今度する
        </h1>
      </div>
    </div>
  );
};
