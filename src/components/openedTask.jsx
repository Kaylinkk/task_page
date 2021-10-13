import React from "react";
import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as UnChecked } from "../img/unchecked.svg";
function OpenTask(props) {
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
    <div className="OpenedTask-Taskbox">
      <div className="OpendedTask-opentask">
        OPEN TASK
        <div>
          <input className="OpenedTask-checkbox" type="checkbox" />
          <span className="OpenedTask-selectAll">Select All</span>
        </div>
      </div>

      {props.taskList.map((task) => {
        return (
          !task.isChecked && (
            <div className="OpenedTask-Task" key={task.id}>
              <label>
                <UnChecked
                  className="OpenedTask-unchecked"
                  width="20"
                  height="20"
                />
                <input type="checkbox" onChange={() => handleChange(task)} />
                <span>{task.data}</span>
              </label>
              <button
                className="OpenedTask-button"
                onClick={() => RemoveTask(task.id)}
              >
                <Delete
                  className="openTask-Trashcan"
                  width="20"
                  height="20"
                ></Delete>
              </button>
            </div>
          )
        );
      })}
    </div>
  );
}
export default OpenTask;
