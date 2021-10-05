
import {React,useState} from "react";
import styles from "./Todo.module.css";

function InputTask({taskList,setTaskList}){

    const [currentItem, setCurrentItem]=useState("");
    const HandleChange =(event) => {
        setCurrentItem(event.target.value);
       
    }

    
    const HandleSubmit = (event) => {
        event.preventDefault();
        const tempList = [...taskList];
        tempList.push({id: taskList.length, data: currentItem, isChecked:false});
        setTaskList(tempList);
    }

return(

<form onSubmit ={HandleSubmit} className={styles.box} >
        <input 
        value={currentItem}
        onChange ={HandleChange}
        placeholder="Enter task here"
        type="text"
        className={styles.input} 
        name="task"
        required
        />
        <button>click</button>
      </form>)
}
export default InputTask;