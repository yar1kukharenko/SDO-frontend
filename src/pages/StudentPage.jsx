import { AppBar, Breadcrumbs, Tab, Tabs, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LabWatchStudent, Navbar } from "../components";
import { useMatchMedia } from "../hooks";
import StudentCSS from "./styles/Student.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      justifyContent: "center",
    },
  },
}));

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <p>{children}</p>}</div>;
};

const StudentPage = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  const { isMobile } = useMatchMedia();
  return (
    <div>
      <Navbar />

      <main className={StudentCSS.main}>
        <AppBar position="static">
          {isMobile && (
            <Tabs
              value={value}
              onChange={handleTabs}
              variant="scrollable"
              // centered={true}
              // scrollButtons
              // allowScrollButtonsMobile
            >
              <Tab label="Лабораторные работы" />
              {/* <Tab label="Формулы" />
              <Tab label="Функции" />
              <Tab label="Форматирование" /> */}
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
              {/* <Tab label="Формулы" />
              <Tab label="Функции" />
              <Tab label="Форматирование" /> */}
            </Tabs>
          )}
        </AppBar>
        <Breadcrumbs className={styles.root}>
          <Link to="/">Главная</Link>
          <Link to="/student">Студент</Link>
        </Breadcrumbs>
        <TabPanel value={value} index={0}>
          {/* <LabWorkStudent></LabWorkStudent> */}
          <LabWatchStudent />
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
          <FormulaStudent></FormulaStudent>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FunctionStudent />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <FormattingStudent />
        </TabPanel> */}
      </main>
    </div>
  );
};

export default StudentPage;
