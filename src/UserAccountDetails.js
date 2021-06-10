import React, { useState } from "react";
import axios from "axios";
export default function UserAccountDetails() {
  const [loggedInUser, setUser] = useState();
  const fetchLogin = async () => {
    try {
      const { data: userData } = await axios.get(
        `https://mini-twitter-back.herokuapp.com/me`
      );
      setUser(userData);
    } catch (e) {
      console.log(e.message);
    }
  };
  fetchLogin();
  console.log(loggedInUser);
  return (
    <div className="col-4">
      <div className="row FullName">FullName</div>
      <div className="row Nickname">Nickname</div>
      <div className="row UserPicture">UserPicture</div>
      <div className="row UserDescription">UserDescription</div>
      <div className="row UserLocation">UserLocation</div>
      <div className="row NumberOfWhistles">NumberOfWhistles</div>
    </div>
  );
}
