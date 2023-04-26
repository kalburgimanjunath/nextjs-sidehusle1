import Navbar from './navbar';
import { useState, useEffect } from 'react';
export default function Widgets({ title, type, lists }) {
  return (
    <div>
      <h4>{title}</h4>
      <div className="lists">
        {lists &&
          lists.map((item) => {
            return <div className="lists-item">{item.name}</div>;
          })}
      </div>
    </div>
  );
}
