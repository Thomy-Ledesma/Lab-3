import { useState } from 'react'
import './ToDoList.css'
const ToDoList = () => {
    const [tasks, setTasks] = useState(["comer"]);
    const [newTask, setNewTask] = useState("");
    
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    const moveTaskDown = (index) => {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    return (
        <div>
            <h1 className='row m-2 d-flex justify-content-center'>To do list</h1>
            <div className='row m-2'>
                <input
                    className=''
                    type='text'
                    placeholder='ingrese una tarea'
                    value={newTask}
                    onChange={handleInputChange}/>
                <button
                    className='add-button'
                    onClick={addTask}>
                    añadir
                </button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index} className='row m-2'>
                        <span className='text col-6 d-flex p-2'>{task}</span>
                        <button
                            className='move-up-button col-1 d-flex justify-content-center'
                            onClick={() => moveTaskUp(index)}>
                            ☝
                        </button>
                        <button
                            className='move-up-button col-1 d-flex justify-content-center'
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                        <button
                            className='delete-button col-4 d-flex justify-content-center'
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList