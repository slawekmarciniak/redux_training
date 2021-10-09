import React from "react";

function PostListElement({ post }) {
  return (
    <h3>
      {post.id}. {post.title}
    </h3>
  );
}

export default PostListElement;
