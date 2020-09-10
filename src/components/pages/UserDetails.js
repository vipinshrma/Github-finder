import React, { useEffect } from "react";
import { useStateValues } from "../../context/StateProvider";
import axios from "axios";
import { GET_SINGLE_USER, GET_REPOS } from "../../context/actionTypes";
import { FaCheck, FaTimesCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const UserDetails = (props) => {
  const [state, dispatch] = useStateValues();
  let username = props.match.params.user;

  const getRepos = async () => {
    const repoUrlPoint = `https://api.github.com/users/${username}/repos?per_page=8&sort=created:asc&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;

    const res = await axios.get(repoUrlPoint);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  const getSingleUser = async () => {
    const UrlEndpoint = `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;

    const result = await axios.get(UrlEndpoint);

    dispatch({
      type: GET_SINGLE_USER,
      payload: result.data,
    });
  };

  useEffect(() => {
    getRepos();
    getSingleUser();
  }, []);

  const {
    avatar_url,
    bio,
    blog,
    company,
    followers,
    following,
    hireable,
    html_url,
    location,
    login,
    name,
    public_gists,
    public_repos,
  } = state.user;

  return (
    <React.Fragment>
      <div className="section-center">
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable : {""}
        {hireable ? <FaCheck /> : <FaTimesCircle />}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="avatar_url"
              style={{ width: "120px" }}
            />
            <h1 className="">{name}</h1>
            {location && <p>Location: {location}</p>}
          </div>
          <div className="all-center">
            {bio && (
              <React.Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </React.Fragment>
            )}
            <a href={html_url} target="_blank" className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              {login && (
                <React.Fragment>
                  <li>
                    <strong>Username: </strong>
                    {login}
                  </li>
                </React.Fragment>
              )}

              {company && (
                <React.Fragment>
                  <li>
                    <strong>Company: </strong>
                    {company}
                  </li>
                </React.Fragment>
              )}

              {blog && (
                <React.Fragment>
                  <li className="blog-detail">
                    <strong className="blog">Blog: </strong>
                    {blog}
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
        <div className="  text-card">
          <div className="badge badge-success"> Followers: {followers}</div>
          <div className="badge badge-primary">Following: {following}</div>
          <div className="badge badge-default">
            Public Repos: {public_repos}
          </div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        {state.repos.map((repo) => {
          const { name } = repo;

          return (
            <div className="card" key={repo.id}>
              <h3>
                <a href={repo.html_url} className="repo-name">
                  {name}
                </a>
              </h3>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
