const SET_POSTS = 'SET_POSTS';
const SET_USERS = 'SET_USERS';
const ADD_POST = 'ADD_POST';
const ADD_USER = 'ADD_USER';
const REMOVE_POST = 'REMOVE_POST';
const REMOVE_USER = 'REMOVE_USER';
const SET_ACTIVE_RESOURCE = 'SET_ACTIVE_RESOURCE';

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id,
});

export const removeUser = (id) => ({
  type: REMOVE_USER,
  payload: id,
});

export const setActiveResource = (resource) => ({
  type: SET_ACTIVE_RESOURCE,
  payload: resource,
});

export const mainReducer = (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((el) => el.id !== action.payload),
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((el) => el.id !== action.payload),
      };
    case SET_ACTIVE_RESOURCE:
      return {
        ...state,
        activeResource: action.payload,
      };
    default:
      return state;
  }
};
