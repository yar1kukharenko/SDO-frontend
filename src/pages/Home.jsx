import React from "react";
import { Link } from "react-router-dom";
import HomeCSS from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={HomeCSS.home_wrapper}>
      <h1 className={HomeCSS.tittle}>Кто вы?</h1>
      <ul>
        <li>
          <Link className={HomeCSS.links} to="/student">
            Студент
          </Link>
        </li>
        <li>
          <Link className={HomeCSS.links} to="/teacher">
            Преподаватель
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
