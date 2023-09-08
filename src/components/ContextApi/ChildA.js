import { useState } from "react";
import ChildB from "./ChildB";
import { MyContext } from "./MyContext";

const ChildA = () => {
  const [text, setText] = useState("This is context Api");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <ChildB />
      </MyContext.Provider>
    </div>
  );
};

export default ChildA;
