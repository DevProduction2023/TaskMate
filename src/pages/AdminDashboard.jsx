import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { StateContext } from '../context/adminContext'


function AdminDashboard() {
    const [users, setUsers] = useState([])
    const [taskLists, setTaskLists] = useState([])
    const [tasks, setTasks] = useState([])


    return (
        <StateContext.Provider value={{ users, setUsers, taskLists, setTaskLists, tasks, setTasks }} >
            <div className='w-[100cw] my-3 mx-4 border-2 border-gray-400 rounded-md p-3 min-h-[90vh] max-h-[90vh] overflow-hidden flex' >
                <ul className='w-1/5 border-r-2  border-gray-400 justify-center px-5 space-y-3 min-h-[80vh] sticky top-5  py-5'>
                    <span className=' font-bold text-xl text-gray-600'>Admin DashBoard</span>
                    <li className='bg-gray-400 px-5 py-1 rounded-sm font-semibold' >
                        <Link to='users' >Users</Link>
                    </li>
                    <li className='bg-gray-400 px-5 py-1 rounded-sm font-semibold' >
                        <Link to='taskList' >Task Lists</Link>
                    </li>
                    <li className='bg-gray-400 px-5 py-1 rounded-sm font-semibold' >
                        <Link to='tasks' >Tasks</Link>
                    </li>
                </ul>
                <div className='w-4/5 justify-center px-5 py-5 overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </StateContext.Provider>
    )
}

export default AdminDashboard