import React from "react";

const Contact = (props) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "60vw",
        height: "5vh",
        alignItems: "center",
      }}
    >
      #{props.id} name : {props.name}, age : {props.age}
      <input type="text" value={props.name} onChange={props.handleChangeName} />
      <button
        onClick={() => {
          props.handleDelete(props.id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default Contact;
