import React from "react";

import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as UnChecked } from "../img/unchecked.svg";
import addSign from "../img/plus.svg";

import styles from "../css/openedTask.module.css";

function MainTodo({ task, taskList, setTaskList }) {
  const handleChange = (task) => {
    // check the item
    // if
    const newList = taskList.map((item) => {
      if (task.id === item.id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setTaskList(newList);
  };

  const RemoveTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleAdd = (task) => {
    const tempMini = [...task.miniTodo];
    tempMini.push({
      id: task.id + "" + task.miniTodo.length,
      data: "sample Text",
      isChecked: false,
    });
    const newList = taskList.map((item) => {
      if (task.id === item.id) {
        item.miniTodo = tempMini;
      }
      return item;
    });
    setTaskList(newList);
    console.log(taskList);
  };

  return (
    <div className={styles.mainTodo}>
      <label className={styles.label}>
        <UnChecked />
        <input type="checkbox" onChange={() => handleChange(task)} />
        <span>{task.data}</span>
      </label>
      <button className={styles.addBtn} onClick={() => handleAdd(task)}>
        <img src={addSign} className="addSign" alt="add Mini todo"></img>
      </button>
      <button className={styles.deleteBtn} onClick={() => RemoveTask(task.id)}>
        <Delete />
      </button>
    </div>
  );
}

export default MainTodo;
