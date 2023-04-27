import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Header, Footer, Sidebar, Widgets, Posts } from '../components/';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const fetchUsers = async () => {
    await fetch('/api/users')
      .then((res) => res.json())
      .then((result) => setUsers(result.users));
  };
  const fetchPosts = async () => {
    await fetch('/api/posts')
      .then((res) => res.json())
      .then((result) => setPosts(result.posts));
  };
  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);
  return (
    <div className={styles.container}>
      <Sidebar />
      <Posts posts={posts} />
      <Widgets title="Popular Publishers" type="user" lists={users} />
    </div>
  );
}
