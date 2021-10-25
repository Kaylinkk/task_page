import React from "react";
import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as Checked } from "../img/checkbox.svg";
import MiniTodo from "./miniTodo";
import styles from "../css/openedTask.module.css";
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
    <div className={styles.inputContainer}>
      <div className={styles.title}>
        FINISHED TASK
        <div>
          <input className={styles.selectAllCheckBox} type="checkbox" />
          <span className={styles.selectAllCheckBoxTitle}>Select All</span>
        </div>
      </div>
      {props.taskList.map(
        (task) =>
          task.isChecked && (
            <div className={styles.taskContainer} key={task.id}>
              <div className={`${styles.mainTodo}  ${styles.finished}`}>
                <label className={styles.label}>
                  <Checked />
                  <input type="checkbox" onChange={() => handleChange(task)} />
                  <span>{task.data}</span>
                </label>

                <button
                  className={styles.deleteBtn}
                  onClick={() => RemoveTask(task.id)}
                >
                  <Delete></Delete>
                </button>
              </div>

              <MiniTodo
                Checked={true}
                task={task}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
              ></MiniTodo>
            </div>
          )
      )}
    </div>
  );
}
export default FinishedTask;
