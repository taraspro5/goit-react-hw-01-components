import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (<ul className={css['friend-list']}>
        {friends.map((friends) => (
        <li key={friends.id} className={css['item']}>
            <span className={`${css['status']} ${friends.isOnline ? css['green'] : css['red']}`}></span>
            <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
            <p className="name">{friends.name}</p>
        </li>
        ))}
    </ul>)
}