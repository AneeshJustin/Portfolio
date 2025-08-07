import React from "react";
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
       
      </nav>
      <Outlet />
    </div>
  );
}