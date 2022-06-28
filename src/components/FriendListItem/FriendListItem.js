import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ friends }) {
  return (
    <>
      {friends.map(el => (
        <li className={s.item} key={el.id}>
          <img className={s.avatar} src={el.avatar} alt={el.name} width="48" />
          <p className={s.name}>{el.name}</p>
          <span className={el.isOnline ? s.statusTrue : s.status}></span>
        </li>
      ))}
    </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendListItem;
