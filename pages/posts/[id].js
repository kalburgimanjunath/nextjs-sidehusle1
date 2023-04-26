import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getAllPosts } from '../api/services/posts.services';
export default function index() {
  const router = useRouter();
  const { id } = router.query;
  const getAll = async () => {
    return await getAllPosts();
  };
  console.log(getAll);

  return <div>Post:{id}</div>;
}
