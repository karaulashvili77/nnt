import React, {useState, useContext} from 'react';
import {fetchPosts, fetchUsers} from './services';
import AppContext from './store/appContext';
import {setPosts, setUsers} from './store/mainDuck';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';

const App = () => {
  const {
    dispatch,
    state: {activeResource},
  } = useContext(AppContext);

  /**
   * Fetch data and set state.
   */
  useState(() => {
    const fetchData = async () => {
      const posts = await fetchPosts();
      const users = await fetchUsers();

      dispatch(setUsers(users));
      dispatch(setPosts(posts));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {activeResource === 'posts' && <Posts />}
      {activeResource === 'users' && <Users />}
    </div>
  );
};

export default App;
