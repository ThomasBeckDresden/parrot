import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
export default function UserAccountDetails() {
  const [loginFinished, setLoginFinished] = useState(false);
  const [loggedInUser, setUser] = useState();
  const [more, setMore] = useState(false);
  let history = useHistory();
  const fetchLogin = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://mini-twitter-back.herokuapp.com/me`
      );
      setUser(data);
      history.push("/");
    } catch (e) {
      console.log(e.message);

      history.push("/404");
    }
  }, [history]);

  useEffect(() => {
    fetchLogin();
  }, [fetchLogin]);
  const handleClick = (e) => {
    if (more) {
      setMore(false);
    } else {
      setMore(true);
    }
  };

  if (loggedInUser && more) {
    return (
      <div className="col-4 p-5">
        <div className="userContainer bg-light">
          <div className="row UserPicture  ">
            <img
              id="profilePicture"
              src={loggedInUser[0].picture}
              alt="profilepicture"
            ></img>
          </div>
          <div className="row fullName">
            <p> Username: {loggedInUser[0].name}FullName</p>
          </div>
          <div className="row userId">
            <p> UserID: {loggedInUser[0].id}</p>
          </div>
          <div className="row userMail">
            <p> e-mail: {loggedInUser[0].email}</p>
          </div>
          <NavLink to="/">
            <div className="btn-primary" onClick={handleClick}>
              <p> Show less...</p>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
  if (loggedInUser) {
    return (
      <div className="col-4 p-5">
        <div className="bg-light">
          <div className="row UserPicture">
            <img src={loggedInUser[0].picture} alt="profilepicture"></img>
          </div>

          <NavLink to={`${loggedInUser[0].id}`}>
            <div className="btn-primary" onClick={handleClick}>
              Show more...
            </div>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="col-4">
      <NavLink to="/">
        <div onClick={fetchLogin}>
          <p>
            Something terrible happened. Click <NavLink to="/">HERE</NavLink> to
            reconnect!
          </p>
        </div>
      </NavLink>
    </div>
  );
}
