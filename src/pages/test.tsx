import { useRef, useState } from "react";

const Test = () => {
  const inputRef = useRef<HTMLInputElement | any>(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleRefTest = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      inputRef.current.className = "line-through";
    }
    if (!isClicked) {
      inputRef.current.className = "no-underline";
    }
  };

  return (
    <div>
      <div className="mt-10">
        <input type="radio" onClick={handleRefTest} className="m-2" />
        <input
          id="test2"
          ref={inputRef}
          className={`bg-gray-300
                                `}
        ></input>
        {/* ${ !isClicked ? "line-through" : ""} */}
      </div>
      <div className="mt-20">
        <label htmlFor="test">
          textarea
          <textarea
            id="test"
            className={`bg-yellow-100
            `}
          />
        </label>
      </div>
    </div>
  );
};

export default Test;
