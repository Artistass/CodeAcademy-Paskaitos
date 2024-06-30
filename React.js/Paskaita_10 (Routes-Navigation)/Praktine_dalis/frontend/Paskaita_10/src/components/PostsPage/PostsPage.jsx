import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_LINK = "https://jsonplaceholder.typicode.com/posts";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_LINK)
      .then((response) => setPosts(response.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>
          <Link to={`/post/${post.id}`}>More Info</Link> <br />
          <button onClick={() => navigate(`/post/${post.id}`)}>More info button</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
