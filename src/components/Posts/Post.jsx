/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';
import propTypes from 'prop-types';
import {removePost} from '../../store/mainDuck';
import './style.css';

const Post = ({id, title, body, dispatch}) => {
  const removePostHandler = () =>
    confirm('Sure u wanna delete post?') && dispatch(removePost(id));

  return (
    <div className="post">
      <button onClick={removePostHandler}>remove</button>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

Post.propType = {
  id: propTypes.number,
  title: propTypes.string,
  body: propTypes.string,
  dispatch: propTypes.func,
};

export default Post;
