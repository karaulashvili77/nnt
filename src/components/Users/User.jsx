/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';
import propTypes from 'prop-types';
import {removeUser} from '../../store/mainDuck';
import './style.css';

const User = ({id, name, username, phone, website, email, dispatch}) => {
  const removeUserHandler = () =>
    confirm('Sure u wanna delete user?') && dispatch(removeUser(id));

  return (
    <div className="user">
      <button onClick={removeUserHandler}>remove</button>
      <p>{name}</p>
      <p>{username}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{email}</p>
    </div>
  );
};

User.propType = {
  id: propTypes.number,
  name: propTypes.string,
  username: propTypes.string,
  phone: propTypes.string,
  website: propTypes.string,
  email: propTypes.string,
  dispatch: propTypes.func,
};

export default User;
