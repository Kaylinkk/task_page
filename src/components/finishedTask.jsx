import React from "react";
import styles from "./Todo.module.css";
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
    <div className={styles.taskBox}>
      <div className={styles.finishedTask}>
        FINISHED TASK
        <div className={styles.finishedTask_checkbox}>
          <input className={styles.cb1} type="checkbox" />
          <span className={styles.selectAll}>Select All</span>
        </div>
      </div>
      {props.taskList.map(
        (task) =>
          task.isChecked && (
            <div className={styles.taskbox} key={task.id}>
              <label>
                <Checked className={styles.checked} width="20" height="20" />
                <input type="checkbox" onChange={() => handleChange(task)} />
                <span>{task.data}</span>
              </label>

              <button
                className={styles.button}
                onClick={() => {
                  RemoveTask(task.id);
                }}
              >
                <Delete className={styles.svg} width="20" height="20"></Delete>
              </button>
            </div>
          )
      )}
    </div>
  );
}
export default FinishedTask;
