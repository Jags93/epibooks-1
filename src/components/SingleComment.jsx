import React from "react";

const SingleComment = ({ comment }) => (
  <div>
    <p>{comment.comment}</p>
    <p>Rate: {comment.rate}</p>
    <button>Delete</button>
  </div>
);

export default SingleComment;
