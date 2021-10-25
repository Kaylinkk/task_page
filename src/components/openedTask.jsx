import React from "react";
import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as UnChecked } from "../img/unchecked.svg";
import addSign from "../img/plus.svg";
import MiniTodo from "./miniTodo";
import styles from "../css/openedTask.module.css";
import MainTodo from "./mainTodo";

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
  const handleAdd = (task) => {
    const tempMini = [...task.miniTodo];
    tempMini.push({
      id: task.id + "" + task.miniTodo.length,
      data: "sample Text",
      isChecked: false,
    });
    const newList = props.taskList.map((item) => {
      if (task.id === item.id) {
        item.miniTodo = tempMini;
      }
      return item;
    });
    props.setTaskList(newList);
    console.log(props.taskList);
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.title}>
        OPEN TASK
        <div>
          <input className={styles.selectAllCheckBox} type="checkbox" />
          <span className={styles.selectAllCheckBoxTitle}>Select All</span>
        </div>
      </div>

      {props.taskList.map((task) => {
        return (
          !task.isChecked && (
            <div className={styles.taskContainer} key={task.id}>
              <MainTodo
                task={task}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
              ></MainTodo>
              <MiniTodo
                Checked={false}
                task={task}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
              ></MiniTodo>
            </div>
          )
        );
      })}
    </div>
  );
}
export default OpenTask;
