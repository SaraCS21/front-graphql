import Header from "@components/Header";
import UserList from "@containers/UserList";

const Users = () => (  
    <>
        <Header />
        <h1 className="w-full mt-8 text-center text-4xl">Usuarios</h1>
        <UserList />
    </>
)


export default Users