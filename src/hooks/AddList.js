import axios from 'axios'

const addtodolistbyName = async (playlistTitle) => {
    try {
        const AddNewList = await axios.post('https://taskmate-server-ayuj.onrender.com/api/list/addlist', {
            title: playlistTitle,
        }, {
            withCredentials: true,
        });
        console.log(AddNewList)
    } catch (error) {
        console.error('Error initializing playlist: ', error);
    }
}

export { addtodolistbyName}
