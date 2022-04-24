import type { ChangeEvent, Dispatch, KeyboardEventHandler, RefAttributes, SetStateAction, VFC } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CompleteContext } from "src/components/context/Complete";

export type Task = {
  readonly id: string;
  task?: string;
};

type TodoItemProps = {
  id?: string;
  task: string;
  setTaskList: Dispatch<SetStateAction<Task[]>>;
  plusBtnClick?: () => void;
};

export const TodoItem: VFC<TodoItemProps> = (props) => {
  const [task, setTask] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const { completeRef } = useContext(CompleteContext);

  useEffect(() => {
    setTask(props.task);
  }, [props.task]);

  const getUniqueId = () => {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  };

  const handleChangeTask = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const task = e.target.value;
    setTask(task);
  };

  //最大200文字まで書き込み、それ以上は入力文字数制限
  const handleCountChange = (e: any) => {
    const truncate = (str: string, length: number) => {
      return str.length >= length ? alert("入力可能な文字数を超えています。") : str;
    };
    truncate(e.target.value, 200);
  };

  const handleCompositionStart = () => {
    setIsTyping(true);
  };

  const handleCompositionEnd = () => {
    setIsTyping(false);
  };

  const handleOnBlur = (e: KeyboardEventHandler<HTMLTextAreaElement> | undefined | any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      if (e.key === "Enter" && !task) return;
    }
  };

  //やりたいこと
  //編集後のリストの下に既存タスクがあったら、エンターでその間に新規リストを追加したい
  //今の挙動
  //編集後エンターで空タスクが一個追加されてしまう。
  //新規追加リストエンターでなぜかeditedを通ってくる。enter3回押さないと下に新規リストが追加されない

  const handleOnKeyDown = useCallback(
    (e: KeyboardEventHandler<HTMLTextAreaElement> | RefAttributes<HTMLTextAreaElement> | undefined | any) => {
      const newId = getUniqueId();
      if (!props.id) {
        if (e.key === "Enter" && !isTyping && !e.shiftKey) {
          props.setTaskList((prev) => {
            return [{ id: newId, task }, ...prev];
          });
          //初期化することで前の内容のコピーを防ぐ
          setTask("");
        }
        // console.log("add task");

        return;
      }
      //IDがすでにある時(編集時)
      if (props.id) {
        if (e.key === "Enter" && !isTyping && !e.shiftKey) {
          props.setTaskList((prev: Task[]) => {
            const editedTask = prev.map((item) => {
              if (item.id === props.id) {
                return { ...item, task: task };
              }
              //編集後のタスクを追加
              return item;
            });
            //エンターキー押したらさらにその下へ新しくタスクを追加
            return [{ id: newId, task: "" }, ...editedTask];
          });
        }
        // console.log("edited");
        return;
      }
    },
    [task, props, isTyping]
  );
  // console.log(props);

  return (
    <div className="mt-[7px] ml-2 w-[200px]">
      <TextareaAutosize
        name="complete"
        placeholder={props.id ? "" : task ? task : "タスクを追加する"}
        value={task}
        ref={completeRef}
        maxLength={200}
        onKeyUp={handleCountChange}
        onChange={handleChangeTask}
        onKeyDown={handleOnKeyDown}
        onBlur={handleOnBlur}
        className={`
                  overflow-hidden
                  focus:outline-none
                  caret-[#F43F5E]
                  resize-none
                  focus-within:outline-none
                  outline-none
        `}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />
    </div>
  );
};
