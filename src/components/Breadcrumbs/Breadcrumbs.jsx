import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Breadcrumbs.module.css";
export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className={css.breadcrumbs}>
      <Link to="/">Главная</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={index}>
            / <Link to={to}>{value}</Link>
          </span>
        );
      })}
    </div>
  );
};
