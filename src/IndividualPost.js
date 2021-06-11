import "./App.css";
import { Link } from "react-router-dom";

export default function IndividualPost({ message, users }) {
  console.log("u:", users);
  console.log("m :", message);
  const messageID = message.users_id;
  const user = users.data.find((user) => user.id === messageID);
  // console.log({ user });
  return (
    <div class="container d-flex justify-content-center bodyContainer">
      <div className="cardContainer col-md-12 col-xl-6 col-sm-12">
        <div className="card" style={{ width: "30 rem" }}>
          <div className="card-body">
            <p className="card-text">Message text : {message.text}</p>
            <p className="card-text"> Message time: {message.time}</p>
            <Link to={`/${user.id}`}>{user.name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
