import type { ChangeEvent, Dispatch, KeyboardEventHandler, SetStateAction, VFC } from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export type Task = {
  readonly id: string;
  task?: string;
};

type TodoItemProps = {
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
};

export const TodoItem: VFC<TodoItemProps> = (props) => {
  const [task, setTask] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    setTask(props.task);
  }, [props.task]);

  const getUniqueId = () => {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  };

  const handleChangeTask = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //taskの中に'\n'が入っているため取り除く処理
    const task = e.target.value.replace("\n", "");
    setTask(task);
  };

  //最大200文字まで書き込み、それ以上は入力文字数制限
  const handleCountChange = (e: any) => {
    const truncate = (str: string, length: number) => {
      return str.length >= length ? alert("入力可能な文字数を超えています。") : str;
    };
    truncate(e.target.value, 200);
  };

  // const str = /^[A-Za-z0-9]*$/ || /^[\x20-\x7e]*$/
  // const hasHankakuStr = str.test(task)

  //全角入力の監視
  const handleCompositionStart = () => {
    //半角だったときの動作を書く
    setIsTyping(false);
  };

  const handleCompositionEnd = () => {
    setIsTyping(true);
  };

  const handleOnKeyDown = useCallback(
    (e: KeyboardEventHandler<HTMLTextAreaElement> | undefined | any) => {
      if (e.key === "Enter" && isTyping) {
        const newId = getUniqueId();
        props.setTaskList((prev) => {
          return [{ id: newId, task }, ...prev];
        });
        //初期化することで前の内容のコピーを防ぐ
        setTask("");
      }
      return;
    },
    [task, props, isTyping]
  );

  // console.log(props);
  // console.log(hasHankakuStr);

  return (
    <div className="mt-[7px] ml-2 w-[200px]">
      <TextareaAutosize
        placeholder={task ? task : "タスクを追加する"}
        value={task}
        maxLength={200}
        onKeyUp={handleCountChange}
        onChange={handleChangeTask}
        onKeyDown={handleOnKeyDown}
        className="
                  overflow-hidden
                  focus:outline-none
                  caret-[#F43F5E]
                  resize-none
                  "
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />
    </div>
  );
};
