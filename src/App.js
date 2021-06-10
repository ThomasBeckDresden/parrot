import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import IndividualPost from "./IndividualPost.js";
import Header from "./Header";
import UserAccountDetails from "./UserAccountDetails.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// get /users --> gets all the users
// get /users/{id} --> gets only the user with that ID
// get /users/{id}/messages --> gets all the messages and user info from that specific user, ordered by time
// post /users --> adds a user -> needs a picture(url), name, email and password
// get /messages --> gets all the messages, ordered by time
// get /messages/{id} --> only gets the message with that ID
// post /messages --> adds a message -> needs text, users_id (time is optional, default is current time)
// get /me --> gets a rando

function App() {
  const [messages, setMessages] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get("https://mini-twitter-back.herokuapp.com/messages")
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
          console.log(users);
          setUsers(users);
        })
        .catch((e) => {
          console.log(e.message);
        });
    };

    // let parameter = searchParameter;
    // try {
    //   console.log(parameter);
    //   const { data: parameter } = await axios
    //     .get(`https://mini-twitter-back.herokuapp.com/${parameter}`)
    //     .then(setPosts(parameter));
    // } catch (e) {
    //   console.log(e.message);
    // }
    // "id": 11,
    // "text": "Had anybody seen my phone?",
    // "time": "2021-06-10T14:04:22.000Z",
    // "users_id": 9

    fetchPosts();
    fetchUsers();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <div className="container bodyPart">
          <div className="row">
            <div className="col-8">
              {messages &&
                users &&
                messages.data.map((message) => (
                  <IndividualPost
                    key={message.id}
                    message={message}
                    users={users}
                  />
                ))}
            </div>
            <UserAccountDetails />
          </div>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/:user_id?"> </Route>
          <Route path="/:userAccountDetails?">
            {" "}
            <UserAccountDetails details={""} />
          </Route>
          <Route path="/:individualPost?">
            <IndividualPost messages={messages} users={users} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
