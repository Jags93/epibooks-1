import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => (
  <ul>
    {comments.map((comment) => (
      <li key={comment._id}>
        <SingleComment comment={comment} />
      </li>
    ))}
  </ul>
);

export default CommentsList;
