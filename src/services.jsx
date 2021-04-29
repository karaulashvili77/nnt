/**
 * Fetch posts url.
 */
const fetchPostsAPI = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Create fetch users url.
 */
const fetchUsersAPI = 'https://jsonplaceholder.typicode.com/users';

/**
 * Fetch posts.
 *
 * @param {number} limit
 */
export const fetchPosts = async () => {
  const rawResponse = await fetch(fetchPostsAPI);
  const response = await rawResponse.json();

  return response;
};

/**
 * Fetch users.
 *
 * @param {number} limit
 */
export const fetchUsers = async () => {
  const rawResponse = await fetch(fetchUsersAPI);
  const response = await rawResponse.json();

  return response;
};
