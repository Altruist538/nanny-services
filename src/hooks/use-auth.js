import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { setUser, removeUser } from '../store/userSlice';

export function useAuth() {
  const dispatch = useDispatch();

  // Read authentication state from local storage
  const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
  const initialIsAuth = storedIsAuthenticated
    ? JSON.parse(storedIsAuthenticated)
    : false;
  // Read user data from Redux state
  const personData = useSelector(state => state.user);
  const { name, email, token, id } = initialIsAuth
    ? JSON.parse(storedIsAuthenticated)
    : personData;
  // Set authentication state in local storage and Redux state
  const setIsAuth = userData => {
    localStorage.setItem('isAuthenticated', JSON.stringify(userData));
    dispatch(setUser(userData));
  };

  // Remove authentication state from local storage and Redux state
  const removeAuth = () => {
    dispatch(removeUser());
    localStorage.removeItem('isAuthenticated');
  };

  // Return authentication state and methods to set/remove authentication
  return {
    isAuth: initialIsAuth,
    name,
    email,
    token,
    id,

    setIsAuth,
    removeAuth,
  };
}
