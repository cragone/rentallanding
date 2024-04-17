import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-primary text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">LunarGen</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">HomePage</a></li>
          <li>
            <details>
              <summary>
                Options
              </summary>
              <ul className="p-2 bg-primary text-white rounded-t-none">
                <li><a href="/StoryPage">Our Story</a></li>
                <li><a href="/ContactPage">Contact Page</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;