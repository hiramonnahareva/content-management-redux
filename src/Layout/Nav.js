import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
 
<nav className="bg-white px-60 border-gray-200 sm:px-4 py-2.5 dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link to='/' className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Content Management</span>
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" to='/'>Home</Link>
        </li>
        <li>
          <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to='post'>Post</Link>
        </li>
        <li>
          <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to='readHistory'>Read History</Link>
        </li>
        <li>
          {/* <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to='update'>Update</Link> */}
        </li>
        {/* <li>
          <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to='/'>Contact</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>


    );
};

export default Nav;