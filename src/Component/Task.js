import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faHeart,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { checktodo, deletetodo, edittodo } from "../JS/actions/Actions";

export const Task = ({ id, description, isDone }) => {


  // const list = useSelector((state) => state.list);
  const [todotitle, setTodoTitle] = useState(description);
  const handleChange = (e) => setTodoTitle(e.target.value);

  const [readinput, setreadinput] = useState(true);
  const dispatch = useDispatch();
  const handleEdit = (event) => {
    if (readinput) {
      setreadinput(false);
    } else {
      dispatch(edittodo(id, todotitle));
      setreadinput(true);
    }
  };

  const handleDelete = () => dispatch(deletetodo(id));

  const handleChecker = () => dispatch(checktodo(id, isDone));

  return (
    <div>
      <motion.li>
        <input
          className={`list${isDone ? "isDone" : "input"}`}
          type="text"
          value={todotitle}
          onChange={handleChange}
          readOnly={readinput}
        />
        <FontAwesomeIcon
          className={`btn${isDone ? "isDone" : ""}`}
          onClick={handleChecker}
          icon={faHeart} faHeart
        ></FontAwesomeIcon>
        <FontAwesomeIcon
        className={`btn${readinput ? "btn" : "on"}`}
          // className="btn"
          onClick={handleEdit}
          icon={faUserPen}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="btn"
          onClick={handleDelete}
          icon={faCircleXmark} 
        ></FontAwesomeIcon>
        
      </motion.li>
    </div>
  );
};