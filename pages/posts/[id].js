import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getAllPosts } from '../api/services/posts.services';
export default function index() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // setPosts(getAllPosts());
  }, []);

  return <div>Post:{id}</div>;
}
