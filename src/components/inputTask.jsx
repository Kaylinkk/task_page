import { React, useState } from "react";

function InputTask({ taskList, setTaskList }) {
  const [currentItem, setCurrentItem] = useState("");
  const HandleChange = (event) => {
    setCurrentItem(event.target.value);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    const tempList = [...taskList];
    tempList.push({
      id: taskList.length,
      data: currentItem,
      miniTodo: [],
      isChecked: false,
    });
    setTaskList(tempList);
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        value={currentItem}
        onChange={HandleChange}
        placeholder="Enter task here"
        type="text"
        className="taskInputField"
        name="task"
        required
      />
    </form>
  );
}
export default InputTask;
