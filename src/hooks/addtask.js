import axios from 'axios';

const addTaskToTaskColumn = async ({ listId, taskTitle, taskDes, DueDate, taskPriority }) => {
    try {
        console.log(" addtask: ", listId)
        const addtask = await axios.post('https://taskmate-server-ayuj.onrender.com/api/list/addtask', {
            listId: listId,
            taskTitle: taskTitle,
            taskDes: taskDes,
            DueDate: DueDate,
            taskPriority: taskPriority
        }, {
            withCredentials: true,
        });
        return { status: 200, data: addtask }
    }
    catch (error) {
        return { status: error?.response?.status || 500, msg: error?.response?.data?.error, error: error.response?.data }
    }
}



export { addTaskToTaskColumn}