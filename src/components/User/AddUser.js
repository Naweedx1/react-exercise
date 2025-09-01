import React, { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({ username: "", age: "" });

  const submitHandler = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className={styles.input} onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="age">age</label>
      <input type="number" name="age" id="age" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
