export const FriendList = ({friends}) => {
    return (<ul className="friend-list">
        {friends.map((friends) => (
        <li key={friends.id} className="item">
            <span className="status"></span>
            <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
            <p className="name">{friends.name}</p>
        </li>
        ))}
    </ul>)
}