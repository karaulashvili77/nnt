import React, {useState, useContext} from 'react';
import AppContext from '../../store/appContext';
import {addPost} from '../../store/mainDuck';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const {dispatch} = useContext(AppContext);

  const postHandler = () => {
    if (title.trim() !== '' && body.trim() !== '') {
      const newPost = {id: Math.random(), title, body};
      dispatch(addPost(newPost));
      setTitle('');
      setBody('');
    } else {
      alert('Please fill all the fields!');
    }
  };

  return (
    <div className="add-post">
      <input
        name="title"
        placeholder="Post Title"
        className="post-title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="body"
        placeholder="Post Body"
        cols={100}
        rows={10}
        className="post-body-input"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={postHandler}>create post</button>
    </div>
  );
};

export default AddPost;
