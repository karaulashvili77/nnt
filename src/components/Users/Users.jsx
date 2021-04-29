import React, {useContext} from 'react';
import AppContext from '../../store/appContext';
import User from './User';
import AddUser from './AddUser';
import './style.css';

const Users = () => {
  const {state, dispatch} = useContext(AppContext);

  return (
    <div className="users">
      <hr />
      <AddUser />
      <hr />
      {state.users.map(({id, name, username, phone, website, email}) => (
        <User
          id={id}
          key={id}
          name={name}
          email={email}
          phone={phone}
          website={website}
          username={username}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Users;
