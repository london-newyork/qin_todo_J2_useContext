import { useRef } from "react";

const Test = () => {
  const inputRef = useRef<HTMLInputElement | any>(null);

  const handleRefTest = () => {
    inputRef.current.className = "line-through";
  };

  return (
    <div>
      {/* <label htmlFor='test'> */}
      <div className="mt-10">
        {/* <label htmlFor="test2">
                  input
                  </label> */}

        <input type="radio" onClick={handleRefTest} className="m-2" value="testtest" />
        <input
          id="test2"
          ref={inputRef}
          className={`bg-gray-300
                        `}
        ></input>
      </div>
      <div className="mt-20">
        <label htmlFor="test">
          textarea
          <textarea
            id="test"
            //   onClick={handleTestTextArea}
            className={`bg-yellow-100
                                  `}
          />
        </label>
      </div>
      {/* </label> */}
    </div>
  );
};

export default Test;
