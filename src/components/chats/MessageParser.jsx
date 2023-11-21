import React from 'react';
import { useDispatch } from "react-redux";
import { setName } from "../../appSlice";

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  const parse = (message) => {
    dispatch(setName(message));
     actions.handleAge();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;