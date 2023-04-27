import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getAllPosts, getPostById } from '../api/services/posts.services';
export default function index() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    // const getAllData = getAllPosts();
    // console.log(getAllData);
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
