import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Posts({ posts }) {
  const PostItem = ({ item }) => {
    return (
      <div className="lists-item">
        <>
          <Link href={`./posts/${item.title}`}>
            <div>{item.author}</div>
            <h4>{item.title}</h4>
            <div>{item.description}</div>

            <div>
              <h6>Published at {item.created_at}</h6>
            </div>
          </Link>
        </>
      </div>
    );
  };
  return (
    <div className="lists">
      {posts &&
        posts.map((item, index) => {
          return <PostItem key={index} item={item} />;
        })}
    </div>
  );
}
