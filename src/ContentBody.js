import "./App.css";
import axios from "axios";
import IndividualPost from "./IndividualPost"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

export default function ComponentBody(props) {
  return props.list.map((post) => (

    <IndividualPost key={post.id} content={post} />

  ));
}


