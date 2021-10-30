import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredHighPriorityTaskListState} from '../store'

const PriorityTasks = () => {

    const highPriorityTaskList = useRecoilValue(filteredHighPriorityTaskListState)

    return (
        <div>
            <hr />
            {highPriorityTaskList.map((task) => (
                <div key={task.id}>
                    {task.name} - 
                    {" " + task.priority}
                </div>
            ))}
        </div>
    )
}

export default PriorityTasks