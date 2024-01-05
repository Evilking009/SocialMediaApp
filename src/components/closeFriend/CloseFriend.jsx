import './closeFriend.css';

const CloseFriend = ({ user: { profilePicture, username } }) => {
    return (
        <li className="sidebarFriend">
            <img src={profilePicture} alt="" className='sidebarFriendImg' />
            <span className='sidebarFriendName'>{username}</span>
        </li>
    )
}

export default CloseFriend