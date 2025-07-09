import axios from "axios";


const logInWithEmailAndPassword = async (email, password) => {
    try {
        console.log('Logging in with email:', email);
        const res = await axios.post('https://taskmate-server-ayuj.onrender.com/api/auth/login', {
            email: email,
            password: password
        }, {
            withCredentials: true,
        });
        if (res.status !== 200) {
            throw new Error('Failed to register user');
        } else {
            return { status: 200 };
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async ({ name, email, password }) => {
    try {
        const res = await axios.post('https://taskmate-server-ayuj.onrender.com/api/auth/register', {
            name: name,
            email: email,
            password: password
        }, {
            withCredentials: true,
        });
        return { status: 201, };
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
}

export { logInWithEmailAndPassword, registerWithEmailAndPassword}  