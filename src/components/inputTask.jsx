import { React, useState } from "react";
import Dictaphone from "./Speech";

function InputTask({ taskList, setTaskList }) {
  const [currentItem, setCurrentItem] = useState("");
  const HandleChange = (event) => {
    setCurrentItem(event.target.value);
  };

  function handleSpeechToText(value) {
    setCurrentItem(value);
  }

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
      <Dictaphone setTranscript={handleSpeechToText} />
    </form>
  );
}
export default InputTask;
