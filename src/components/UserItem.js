import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ user }) {
  return (
    <div className="card-center">
      <div className="user-card">
        <div className="user-detail">
          <img src={user.avatar_url} className="user-img" width="60px" />
          <h3>{user.login}</h3>
        </div>
        <div>
          <Link to={`/userdetails/${user.login}`} className="btn btn-dark">
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
