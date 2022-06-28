import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

export default FriendList;
