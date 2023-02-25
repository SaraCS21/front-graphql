import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import Error from "@components/Error";
import UserItem from "@components/UserItem";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(import.meta.env.VITE_USERS);

            if(!response.ok) {
                setError(response.statusText)
                setLoading(false)
                return
            }

            const data  = await response.json();

            setUsers(data);
            setLoading(false);
        }
        
        fetchUsers()
    }, [])

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error}/>

    return (
        <ul className='w-[85%] flex flex-wrap justify-center lg:justify-start mx-auto py-6'>
            {
                users.map(user => <UserItem key={uuidv4()} user={user}/>)
            }
        </ul>
    )
}

export default UserList;