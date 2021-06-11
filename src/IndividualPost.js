import "./App.css";
import { Link } from "react-router-dom";
import moment from "moment";

export default function IndividualPost({ message, users, setEndpoint }) {
  // console.log("u:", users);
  // console.log("m :", message);
  const messageID = message.users_id;
  const user = users.data.find((user) => user.id === messageID);
  const handleClick = () => {
    setEndpoint(`users/${user.id}/messages`);
  };
  // console.log({ user });
  return (
    <div class="container d-flex justify-content-center bodyContainer">
      <div className="cardContainer col-md-12 col-xl-6 col-sm-12">
        <div className="card" style={{ width: "30 rem" }}>
          <div className="card-body">
            <p className="card-text"> Text : {message.text}</p>
            <p className="card-text">
              {" "}
              posted: {moment(message.time).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            {user ? (
              <Link to={`${user.id}/messages/`} onClick={handleClick}>
                {user.name}
              </Link>
            ) : message.name ? (
              <Link to={"/"}>{message.name}</Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
