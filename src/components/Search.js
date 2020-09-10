import React, { useState } from "react";

import { useStateValues } from "../context/StateProvider";
import axios from "axios";
import { SEARCH_USERS, CLEAR_USERS } from "../context/actionTypes";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [state, dispatch] = useStateValues();

  const searchUser = async (username) => {
    const UrlEndpoint = `https://api.github.com/search/users?q=${username}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;

    const res = await axios.get(UrlEndpoint);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchUser(searchText);
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          autoComplete="off"
          value={searchText}
          onChange={onChange}
        />

        {searchText.length === 0 ? (
          <input
            type="submit"
            value="Search"
            className="btn"
            disabled
            onClick={(e) => onSubmit(e)}
          />
        ) : (
          <input
            type="submit"
            value="Search"
            className="btn"
            onClick={(e) => onSubmit(e)}
          />
        )}
        {state.users.length > 0 ? (
          <input
            type="button"
            value="Clear"
            className="btn white-bg"
            onClick={(e) => dispatch({ type: CLEAR_USERS })}
          />
        ) : null}
      </form>
    </div>
  );
}
