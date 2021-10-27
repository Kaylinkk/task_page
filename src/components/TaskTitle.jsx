import React from "react";
import styles from "../css/openedTask.module.css";
function TaskTitle(props) {
  return (
    <div className={styles.title}>
      {props.title}
      <div>
        <input className={styles.selectAllCheckBox} type="checkbox" />
        <span className={styles.selectAllCheckBoxTitle}>Select All</span>
      </div>
    </div>
  );
}

export default TaskTitle;
