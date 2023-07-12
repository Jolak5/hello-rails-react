import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomMessage } from "../redux/message";
import { Link } from "react-router-dom";

function Message() {
  const message = useSelector((state) => state.content);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomMessage());
  }, [dispatch]);
  return (
    <section>
      <h1>This is me saying hi</h1>
      <h2>{message}</h2>
      <Link to='/'>
        <button>Back to Home</button>
      </Link>
    </section>
  );
}

export default Message;
