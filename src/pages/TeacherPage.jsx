import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { LabWorkAdd, Navbar } from "../components";
import { useMatchMedia } from "../hooks";
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
        {/* Панель табов для мобильных устройств */}
        {isMobile && (
          <Tabs
            value={value}
            onChange={handleTabs}
            variant="scrollable"
            centered={true}
          >
            <Tab label="Лабораторные работы" />
            <Tab label="Формулы" />
            <Tab label="Функции" />
            <Tab label="Форматирование" />
          </Tabs>
        )}
        {/* Панель табов для всех остальных */}
        {!isMobile && (
          <Tabs value={value} onChange={handleTabs} centered={true}>
            <Tab label="Лабораторные работы" />
            <Tab label="Формулы" />
            <Tab label="Функции" />
            <Tab label="Форматирование" />
          </Tabs>
        )}
      </AppBar>
      <TabPanel value={value} index={0}>
        <LabWorkAdd />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
    </div>
  );
};

export default StudentPage;
