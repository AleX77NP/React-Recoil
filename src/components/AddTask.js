import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { taskListState } from '../store'

const AddTask = () => {

    const [task, setTask] = useState('')
    const setTaskList = useSetRecoilState(taskListState)

    const addTask = () => {
        if (task === '') {
            alert('Please enter task name')
            return
        }
        setTaskList((oldTaskList) => [
            ...oldTaskList,
            {
                id: oldTaskList.length + 1,
                name: task
            }
        ])
        setTask('')
    }

    return (
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '25px' }}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default AddTask
