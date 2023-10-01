import css from '../css/Profile.module.css'

export const Profile = ({username, tag, location, avatar, stats : {followers, views, likes}}) => {
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
    );
}