import axios from "axios";

const fetchUserPlaylists = async () => {
    try {
        const userList = await axios.post(`https://taskmate-server-ayuj.onrender.com/api/list/lists`, {}, {
            withCredentials: true,
        });
        console.log(userList);
        return userList.data;
    } catch (error) {
        console.error('Error fetching Todolists: ', error);
        throw error;
    }
};

const fetchTasksForPlaylist = async (listId) => {
    try {
        const taskList = await axios.get(`https://taskmate-server-ayuj.onrender.com/api/list/${listId}`, {
            withCredentials: true, 
        });

        const Tasks = [
            {
                id: '01',
                title: 'Low Priority',
                priority: 'low',
                tasks: []
            },
            {
                id: '02',
                title: 'Medium Priority',
                priority: 'medium',
                tasks: []
            },
            {
                id: '03',
                title: 'High Priority',
                priority: "high",
                tasks: []
            }
        ]

        taskList?.data?.tasks?.forEach((task) => {
            console.log("check task: ", task)
            if (task?.priority === 'low') {
                Tasks[0].tasks.push(task);
            } else if (task?.priority === 'medium') {
                Tasks[1].tasks.push(task);
            } else if (task?.priority === 'high') {
                Tasks[2].tasks.push(task);
            }
        });
        return Tasks;
    } catch (error) {
        console.error('Error fetching tasks: ', error);
        throw error;
    }
};


const updatedragTodoList = async ({ listId, taskId, priority }) => {
    try {
        if (!listId || !taskId || !priority) {
            return;
        }
        const updatedList = await axios.post(`https://taskmate-server-ayuj.onrender.com/api/list/${listId}/${taskId}`, {
            priority: priority
        }, {
            withCredentials: true,
        });
        return updatedList.data;
    } catch (error) {
        return error;
    }
}

const addTaskToTaskColumn = async ({ listprevId, listNextId, taskId }) => {
    try {
        console.log("  addTaskToTaskColumn : ", listprevId, listNextId, taskId)
        const addtask = await axios.put(`https://taskmate-server-ayuj.onrender.com/api/list/tasktolist/${listprevId}/${listNextId}/${taskId}`, {}, {
            withCredentials: true,
        });
        return { status: 200 }
    } catch (error) {
        console.log(error)
    }
}

export { fetchUserPlaylists, fetchTasksForPlaylist, updatedragTodoList,addTaskToTaskColumn }