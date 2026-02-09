import { useState, useEffect } from "react";
import { apiRequest } from "../api/api";

function Post() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/posts?_limit=5")
      .then((data) => setPosts(data))
      .catch(() => setError("failed to load post"));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {" "}
        {posts.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}{" "}
      </ul>
    </>
  );
}

export default Post;
