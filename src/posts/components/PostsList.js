import React from "react";

import PostListElement from "./PostListElement";

function PostsList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <PostListElement key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
