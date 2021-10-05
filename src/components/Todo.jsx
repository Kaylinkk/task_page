import { React, useState } from "react";

import FinsihedTask from "./finishedTask";
import OpenTask from "./openedTask";
import InputTask from "./inputTask.jsx";
import Greeting from "../Greeting";
function Todo(props) {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <Greeting />
      <InputTask taskList={taskList} setTaskList={setTaskList} />
      <OpenTask taskList={taskList} setTaskList={setTaskList} />
      <FinsihedTask taskList={taskList} setTaskList={setTaskList} />
    </>
  );
}

export default Todo;
