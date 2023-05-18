import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LabWatchStudentCSS from "./LabWatchStudent.module.css";

export const LabWatchStudent = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://sdo-python-server.onrender.com/tasks")
      .then((response) => response.json())
      .then((data) => {
        // Обработка полученных данных
        const tasksArray = Object.keys(data).map((_, i) => i + 1);
        setTasks(tasksArray);
        setTask(data);
        setLoading(false);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={LabWatchStudentCSS.wrapper}>
      {loading && (
        <CircularProgress
          size={"5rem"}
          sx={{
            margin: "0 auto",
          }}
        />
      )}
      {tasks.map((item) => (
        <Link to={`/task/${item}`} key={item}>
          <div className={LabWatchStudentCSS.task}>
            <p>Лабораторная работа {item}</p>
            <p>{task[item]}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
