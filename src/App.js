import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import IndividualPost from "./IndividualPost.js";
import Header from "./Header";
import UserAccountDetails from "./UserAccountDetails.js";

import { Switch, Route, useLocation } from "react-router-dom";
// get /users --> gets all the users
// get /users/{id} --> gets only the user with that ID
// get /users/{id}/messages --> gets all the messages and user info from that specific user, ordered by time
// post /users --> adds a user -> needs a picture(url), name, email and password
// get /messages --> gets all the messages, ordered by time
// get /messages/{id} --> only gets the message with that ID
// post /messages --> adds a message -> needs text, users_id (time is optional, default is current time)
// get /me --> gets a rando
function usePageViews() {
  let location = useLocation();
  console.log(location);
  // useEffect(() => {
  //   ga.send(["pageview", location.pathname]);
  // }, [location]);
}
// https://reactrouter.com/web/api/Hooks
function App() {
  // let history = useHistory();
  usePageViews();
  // history.push("/messages");
  /* const { endpoint } = useParams(); */
  const [endpoint, setEndpoint] = useState();
  // console.log(endpoint);
  const [messages, setMessages] = useState();
  const [users, setUsers] = useState();
  //const [loggedInUser, setUser] = useState();
  const userId = "";

  const endp = "https://mini-twitter-back.herokuapp.com/";
  useEffect(() => {
    console.log("useEffect is doing something");
    /* console.log(`${endp}${userId ? `users/${userId}/` : ""}messages`); */
    const fetchPosts = () => {
      axios
        .get(
          `${endp}${
            endpoint
              ? `${endpoint}`
              : userId
              ? `users/${userId}/messages`
              : "messages"
          }`
        )
        .then((data) => {
          let messages = data;
          console.log(messages);
          setMessages(messages);
        })
        .catch((e) => {
          console.log(e.message);
        });
    };
    const fetchUsers = () => {
      axios
        .get("https://mini-twitter-back.herokuapp.com/users")
        .then((data) => {
          let users = data;
          /* console.log(users); */
          setUsers(users);
        })
        .catch((e) => {
          console.log(e.message);
        });
    };

    fetchPosts();
    fetchUsers();
  }, [userId, endpoint]);

  return (
    <>
      <Header setEndpoint={setEndpoint} />
      <div className="App">
        <div className="container">
          <div className="row bodyPart">
            <div className="col-8">
              {messages &&
                users &&
                messages.data.map((message) => (
                  <IndividualPost
                    key={message.id}
                    message={message}
                    users={users}
                    setEndpoint={setEndpoint}
                  />
                ))}
            </div>
            <UserAccountDetails endpoint={endpoint} setEndpoint={setEndpoint} />
          </div>
        </div>
        <div>
          <Switch>
            <Route path=":user_id?"> </Route>
            <Route path="/:userAccountDetails?"> </Route>
            <Route path="$/messages/:individualPost?/:search?">
              <IndividualPost
                messages={messages}
                users={users}
                setEndpoint={setEndpoint}
              />
            </Route>
          </Switch>
        </div>
      </div>
      <p className="footer">© 2021 by Group 1</p>
    </>
  );
}

export default App;
