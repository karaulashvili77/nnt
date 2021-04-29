import React, {useState, useContext} from 'react';
import AppContext from '../../store/appContext';
import {addUser} from '../../store/mainDuck';

const AddUser = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const {dispatch} = useContext(AppContext);

  const addUserHandler = () => {
    if (
      name.trim() !== '' &&
      username.trim() !== '' &&
      phone.trim() !== '' &&
      website.trim() !== '' &&
      email.trim() !== ''
    ) {
      const newUser = {
        id: Math.random(),
        name,
        username,
        phone,
        website,
        email,
      };

      dispatch(addUser(newUser));

      setName('');
      setUsername('');
      setPhone('');
      setWebsite('');
      setEmail('');
    } else {
      alert('Please fill all the fields!');
    }
  };

  return (
    <div className="add-user">
      <input
        placeholder="Name"
        className="post-title-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Username"
        className="post-title-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Phone"
        className="post-title-input"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder="Website"
        className="post-title-input"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        placeholder="Email"
        className="post-title-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUserHandler}>create user</button>
    </div>
  );
};

export default AddUser;
