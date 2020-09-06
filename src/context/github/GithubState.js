import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const github = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
  });

  // dispatch to the reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const res = await github.get(`/search/users?q=${text}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Clear Users
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS,
    });

  // Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  return (
    <GithubContext.Provider
      // make this value available to entire app
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
