import React, {useState} from "react";
import Task from "./Task";



function TaskList( props ) {
  const { tasks: initialTasks } = props;
  const [tasks, setTasks] = useState(initialTasks);
  
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task !== taskId);
    setTasks(updatedTasks);
  }
  
  // // set state with tasks
  // const [taskList, setTaskList] = useState(tasks);

  // // function to remove task from list
  // function deleteTask(taskId) {
  //   const updatedTaskList = taskList.filter((task) =>
  //   task.id !== taskId);
  //   setTaskList(updatedTaskList);
  // }
  // // const [tasks, setTasks] = useState( true )
  
  
  const taskElement = tasks.map((task) => (
    <Task
    key = {task.id}
    text = {task.text}
    category = {task.category}
    onDelete = {() => handleDeleteTask(task)}
    />
  ));

  return (
    <div className="tasks">
      {taskElement}
    </div>
  );
}

export default TaskList;