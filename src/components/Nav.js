import { Link } from 'gatsby';
import React from 'react';

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <span>Logo</span>
        </Link>
        <div>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
