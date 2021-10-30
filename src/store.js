import { atom, selector } from "recoil";

export const taskListState = atom({
    key: 'taskListState',
    default: []
})

export const highPriorityTaskListState = atom({
    key: 'highPriorityTaskListState',
    default: 3
})

export const filteredHighPriorityTaskListState = selector({
    key: 'filteredHighPriorityTaskListState',
    get: ({ get }) => {
        const filter = get(highPriorityTaskListState)
        const list = get(taskListState)

        return list.filter(task => task.priority >= filter)
    }
});