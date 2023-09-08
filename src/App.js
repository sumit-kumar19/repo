import "./App.css";
import ArrayExamples from "./playground/ArrayExamples";
import { Route, Routes } from "react-router-dom";
import About from "./components/ReactRouter/About";
import Help from "./components/ReactRouter/Help";
import Policy from "./components/ReactRouter/Policy";
import NotFound from "./components/ReactRouter/NotFound";
import Header from "./components/Header/Header";
import NewEmployee from "./components/NewEmployee/NewEmployee";

ArrayExamples.testArray();

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<About></About>}></Route>
        <Route path="/help" element={<Help></Help>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="/newemp" element={<NewEmployee></NewEmployee>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <hr></hr>
    </div>
  );
}

export default App;
