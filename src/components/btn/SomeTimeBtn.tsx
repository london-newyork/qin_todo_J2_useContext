import type { VFC } from "react";

export const SomeTimeBtn: VFC = () => {
  return (
    <div>
      {/* Inputに書き込んだものが、「今度するボタン」をクリックで「今度するエリア」にtodoを追加 */}
      <button
        className="
                flex
                justify-between
                items-center
                py-[10px]
                px-4
                w-[104px]
                h-[36px]
                text-xs
                font-bold
                text-white
                bg-tertiary-yellow
                rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        今度する
      </button>
      {/* 今日するエリアにあるtodoを今度するエリアへ移動する際、下記のボタンに変わる。 */}
      <button
        className="
                flex
                justify-between
                items-center
                py-[10px]
                px-4
                w-[104px]
                h-[36px]
                text-xs
                font-bold
                text-white
                bg-tertiary-yellow
                rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
        今度する
      </button>
      {/* 明日するエリアにあるtodoを今度するエリアへ移動する際、下記のボタンに変わる。 */}
      <button
        className="
                flex
                justify-between
                items-center
                py-[10px]
                px-4
                w-[104px]
                h-[36px]
                text-xs
                font-bold
                text-white
                bg-tertiary-yellow
                rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        今度する
      </button>
      {/* 今度するエリアのTodoの一つをクリックで、下記のボタンに変わる。さらにtodoの文言を更新する機能 */}
      <button
        className="
                flex
                justify-between
                items-center
                py-[10px]
                px-4
                w-[104px]
                h-[36px]
                text-xs
                font-bold
                text-white
                bg-tertiary-yellow
                rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        今度する
      </button>
    </div>
  );
};
