import React, { useState } from "react";
import { LabWorkAdd, Navbar } from "../components";

const TeacherPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <Navbar />
      <button onClick={toggleVisibility}>Показать/скрыть компонент</button>
      {isVisible && <LabWorkAdd />}
    </div>
  );
};

export default TeacherPage;
