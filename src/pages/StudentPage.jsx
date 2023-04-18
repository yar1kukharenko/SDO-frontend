import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { Navbar } from "../components";
import { FormattingStudent } from "../components/FormattingStudent";
import { FormulaStudent } from "../components/FormulasStudent";
import { FunctionStudent } from "../components/FunctionStudent/FunctionStudent";
import { LabWorkStudent } from "../components/LabWorkStudent";
import { useMatchMedia } from "../hooks";
import StudentCSS from "./styles/Student.module.css";

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
      <main className={StudentCSS.main}>
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
        <TabPanel value={value} index={0}>
          <LabWorkStudent></LabWorkStudent>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormulaStudent></FormulaStudent>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FunctionStudent />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <FormattingStudent />
        </TabPanel>
      </main>
    </div>
  );
};

export default StudentPage;
