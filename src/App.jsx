import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      conpleted: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      conpleted: true,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const nweTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(nweTask);

  };

  return(
    <>
      <div className="container">
        <AddTask  handleTaskAddition = {handleTaskAddition} />
        <Tasks tasks={tasks}/>
      </div>
     
    </>
   
  ); 
};

export default App;
