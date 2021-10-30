import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { taskListState } from '../store'
import AddTask from './AddTask'

const Tasks = () => {

    const taskList = useRecoilValue(taskListState)
    const setTaskList = useSetRecoilState(taskListState)

    const removeTask = (id) => {
        setTaskList((oldTaskList) => oldTaskList.filter(task => task.id !== id))
    }
    return (
        <div>
            <AddTask />
            <hr />
            {taskList.map((task) => (
                <div key={task.id}>
                    {task.name}
                    <button style={{color: 'white', backgroundColor: 'red', marginLeft: '10px'}} onClick={() => removeTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Tasks
