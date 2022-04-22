import { useRef, useState } from "react";

const Test = () => {
  const completeRef = useRef<HTMLTextAreaElement | any>(null);
  const [isClicked, setIsClicked] = useState(false);

  //
  const handleClickComplete = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      completeRef.current.className = "line-through";
    }
    if (!isClicked) {
      completeRef.current.className = "no-underline";
    }
  };

  return (
    <div>
      <div className="mt-10">
        <input type="radio" onClick={handleClickComplete} className="m-2" />
        <textarea
          id="test2"
          ref={completeRef}
          className={`bg-gray-300
                                `}
        ></textarea>
      </div>
      {/* <div className="mt-20">
        <label htmlFor="test">
          textarea
          <textarea
            id="test"
            className={`bg-yellow-100
            `}
          />
        </label>
      </div> */}
    </div>
  );
};

export default Test;
