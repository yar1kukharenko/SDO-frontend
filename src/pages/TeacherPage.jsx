import { AppBar, Tab, Tabs, makeStyles } from "@material-ui/core";
import { Breadcrumbs } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LabWorkAdd, LabWorkWatch, Navbar } from "../components";
import { useMatchMedia } from "../hooks";

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

const TeacherPage = () => {
  const styles = useStyles();
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
            // centered={true}
            // scrollButtons
            // allowScrollButtonsMobile
          >
            <Tab label="Добавить лабораторную работу" />
            <Tab label="Просмотр лабораторных работ" />
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
            <Tab label="Добавить лабораторную работу" />
            <Tab label="Просмотр лабораторных работ" />
          </Tabs>
        )}
      </AppBar>
      <Breadcrumbs className={styles.root}>
        <Link to="/">Главная</Link>
        <Link to="/teacher">Преподаватель</Link>
      </Breadcrumbs>
      <TabPanel value={value} index={0}>
        <LabWorkAdd />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LabWorkWatch />
      </TabPanel>
    </div>
  );
};

export default TeacherPage;
