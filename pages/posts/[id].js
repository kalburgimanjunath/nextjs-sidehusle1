import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getAllPosts, getPostById } from '../api/services/posts.services';
export default function index() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const fetchPosts = async () => {
    await fetch('/api/posts')
      .then((res) => res.json())
      .then((result) => setPosts(result.posts));
  };
  useEffect(() => {
    fetchPosts();
  });
  return (
    <div>
      Post:{id}
      <>
        <div>
          {posts && posts.length > 0 ? (
            <div>
              {post.map((item) => {
                return <div>{item.title}</div>;
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </>
    </div>
  );
}
