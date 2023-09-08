import { useState } from "react";
import ChildA from "../ContextApi/ChildA";

const StateComponent = (props) => {
  const [title, setTitle] = useState(props.title);

  const updateClickHandler = () => {
    setTitle("This is updated !!");
  };

  return (
    <div>
      <p>{title}</p>
      <button onClick={updateClickHandler}>
        Click to update</button>
        <hr></hr>
        <ChildA></ChildA>
    </div>
  );
};

export default StateComponent;
