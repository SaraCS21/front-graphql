import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import UserItem from "@components/UserItem";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(import.meta.env.VITE_USERS);
            const data  = await response.json();

            setUsers(data);
        }
        
        fetchUsers()
    }, [])


    return (
        <ul className='w-[85%] flex flex-wrap justify-center lg:justify-start mx-auto py-6'>
            {
                users.map(user => <UserItem key={uuidv4()} user={user}/>)
            }
        </ul>
    )
}

export default UserList;