import React, {useContext} from 'react';
import AppContext from '../../store/appContext';
import {setActiveResource} from '../../store/mainDuck';
import './style.css';

const Header = () => {
  const {state, dispatch} = useContext(AppContext);

  const onPostsButtonClick = () => dispatch(setActiveResource('posts'));
  const onUsersButtonClick = () => dispatch(setActiveResource('users'));

  return (
    <header>
      <h1>{state.activeResource}</h1>
      <div className="buttons-wrapper">
        <button className="button" onClick={onPostsButtonClick}>
          Posts
        </button>
        <button className="button" onClick={onUsersButtonClick}>
          Users
        </button>
      </div>
    </header>
  );
};

export default Header;
