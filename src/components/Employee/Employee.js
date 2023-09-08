import "./Employee.css";
import EmployeeDate from "../SplitingComponents/EmployeeDate";
import StateComponent from "../State/StateComponent";
import useCounter from "../Hooks/useCounter";

function Employee(props) {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="wrapper">
      <h2>Heading 1</h2>
      <div>Employee Name</div>
      <div>{props.empName}</div>
      <hr></hr>
      <div>Age</div>
      <div>{props.age}</div>
      <hr></hr>
      <div>Joining Date</div>
      <EmployeeDate empDate={props.joiningDate} />
      <hr></hr>
      <StateComponent title={props.empName}></StateComponent>
      <hr></hr>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Employee;
