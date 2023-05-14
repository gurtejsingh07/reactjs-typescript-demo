
/***
 * @author Gurtej Singh
 * @description This is main file linking to all typescript concepts
 *
 */

import { Outlet, Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/person">Person  Details</Link>
          </li>
          <li>
            <Link to="/personslist">All users</Link>
          </li>
          <li>
            <Link to="/profileStatus">Profile Status</Link>
          </li>
          <li>
            <Link to="/child">How to pass children react elements</Link>
          </li>
          <li>
            <Link to="/auth">Authorize User</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

