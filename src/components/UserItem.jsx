const UserItem = ({ user }) => {

    const { avatar, email, name, role } = user

    return (
        <li className="w-[19%] flex flex-col justify-between border border-slate-300 rounded shadow p-5 mt-4 mr-3 hover:cursor-pointer">
            <img className="w-[90%] h-48 self-center" src={avatar} alt={name} />
            <div className="p-3">
                <p className="text-purple font-medium">{role}</p>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p>{email}</p>
            </div>
        </li>
    );
}

export default UserItem;