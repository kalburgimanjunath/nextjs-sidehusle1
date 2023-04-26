import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getAllPosts, getPostById } from '../api/services/posts.services';
export default function index() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setPosts(getPostById(id));
  }, []);
  console.log(posts);

  return <div>Post:{id}</div>;
}
