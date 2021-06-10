import "./App.css";
import { Link } from "react-router-dom";

export default function IndividualPost({ message, users }) {
  console.log("u:", users);
  console.log("m :", message);
  const messageID = message.users_id;
  const user = users.data.find((user) => user.id === messageID);
  // console.log({ user });
  return (
    <div className="row">
      <p>Message text : {message.text}</p>
      <p> Message time: {message.time}</p>
      <Link to={`/${user.id}`}>{user.name}</Link>
    </div>
  );
}
