import React from "react";
import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as Checked } from "../img/checkbox.svg";
function FinishedTask(props) {
  const handleChange = (task) => {
    // check the item
    // if
    const newList = props.taskList.map((item) => {
      if (task.id === item.id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    props.setTaskList(newList);
  };

  const RemoveTask = (id) => {
    props.setTaskList(props.taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="Finished-taskBox">
      <div className="FinishedTask-Finishtask">
        FINISHED TASK
        <div>
          <input className="FinishedTask-checkbox" type="checkbox" />
          <span className="FinishedTask-selectAll">Select All</span>
        </div>
      </div>
      {props.taskList.map(
        (task) =>
          task.isChecked && (
            <div className="FinishedTask-Task" key={task.id}>
              <label>
                <Checked className="Finished-checked" width="20" height="20" />
                <input type="checkbox" onChange={() => handleChange(task)} />
                <span>{task.data}</span>
              </label>

              <button
                className="Finished-button"
                onClick={() => {
                  RemoveTask(task.id);
                }}
              >
                <Delete
                  className="Finished-Trashcan"
                  width="20"
                  height="20"
                ></Delete>
              </button>
            </div>
          )
      )}
    </div>
  );
}
export default FinishedTask;
