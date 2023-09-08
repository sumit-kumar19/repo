import { useContext } from "react";
import { MyContext } from "./MyContext";

function ChildC() {
  const { text, setText } = useContext(MyContext);

  const clickHandler = () => {
    setTimeout(() => {
      setText("Updated via context Api!");
    }, 2000);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={clickHandler}>Test Context Api</button>
    </div>
  );
}

export default ChildC;
