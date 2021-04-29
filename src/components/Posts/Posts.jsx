import React, {useContext} from 'react';
import AppContext from '../../store/appContext';
import Post from './Post';
import AddPost from './AddPost';
import './style.css';

const Posts = () => {
  const {
    state: {posts},
    dispatch,
  } = useContext(AppContext);

  return (
    <div className="posts">
      <hr />
      <AddPost />
      <hr />
      {posts.map(({id, title, body}) => (
        <Post key={id} id={id} title={title} body={body} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default Posts;
