import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getAllPosts, getPostById } from '../api/services/posts.services';
export default function index() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const getPostRecords = () => {
    return setPosts(getPostById(id));
  };
  useEffect(() => {
    if (id) {
      getPostRecords();
    }
  }, []);
  const RenderPosts =
    posts &&
    posts.length > 0 &&
    posts.map((item) => {
      return <div>{item.title}</div>;
    });

  return (
    <div>
      Post:{id}
      <>
        <div>
          {posts && posts.length > 0 ? (
            <div>
              <RenderPosts />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </>
    </div>
  );
}
