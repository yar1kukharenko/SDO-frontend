import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { Navbar } from "../components";
import { useMatchMedia } from "../hooks";
import arrow_left from "../static/img/free-icon-arrow-right-42627801.svg";
import arrow_right from "../static/img/free-icon-arrow-right-42627802.svg";
import TeacherCSS from "./styles/Teacher.module.css";
const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <p>{children}</p>}</div>;
};

const StudentPage = () => {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  const { isMobile } = useMatchMedia();
  return (
    <div>
      <Navbar />

      <AppBar position="static">
        {isMobile && (
          <Tabs
            value={value}
            onChange={handleTabs}
            variant="scrollable"
            centered={true}
            // scrollButtons
            // allowScrollButtonsMobile
          >
            <Tab label="Лабораторные работы" />
            <Tab label="Формулы" />
            <Tab label="Функции" />
            <Tab label="Форматирование" />
          </Tabs>
        )}
        {!isMobile && (
          <Tabs
            value={value}
            onChange={handleTabs}
            // variant="scrollable"
            centered={true}
            // scrollButtons
            // allowScrollButtonsMobile
          >
            <Tab label="Лабораторные работы" />
            <Tab label="Формулы" />
            <Tab label="Функции" />
            <Tab label="Форматирование" />
          </Tabs>
        )}
      </AppBar>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>

      <main className={TeacherCSS.main}>
        <section className={TeacherCSS.task}>
          <div className={TeacherCSS.container}>
            <h2 className={TeacherCSS.task__title}>
              Название лабораторной работы
            </h2>
            <p className={TeacherCSS.task__teacher}>
              221-384 (номер учебной группы)
            </p>
            <p className={TeacherCSS.task__text}>№ Задания</p>
            <textarea
              className={TeacherCSS.task__code}
              name=""
              id=""
              placeholder="ТЕКСТ ЗАДАНИЯ (на ввод)"
            ></textarea>
            <div className={TeacherCSS.task__textarea}>
              <textarea
                className={TeacherCSS.task__input}
                name=""
                id=""
                placeholder="№ Входные данные (поле ввода)"
              ></textarea>
              <textarea
                className={TeacherCSS.task__result}
                name=""
                id=""
                placeholder="№ На выход (поле ввода)"
              ></textarea>
            </div>
            <textarea
              className={TeacherCSS.task__input_text}
              name=""
              id=""
              placeholder="Поле для ввода тестов"
            ></textarea>
            <div className={TeacherCSS.send}>
              <a href="#">
                <img src={arrow_right} alt="" />
              </a>
              <button>Отправить</button>
              <a href="#">
                <img src={arrow_left} alt="" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentPage;
