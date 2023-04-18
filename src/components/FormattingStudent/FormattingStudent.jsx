import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import StudentCSS from "../../pages/styles/Student.module.css";
import FormattingCSS from './FormattingStudent.module.css'

export function FormattingStudent() {
    const fileTypes = ["py"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
  return (
    <section className={StudentCSS.task}>
      <div className={StudentCSS.container}>
        <h2 className={StudentCSS.task__title}>Проверка форматирования</h2>
        <FileUploader
          classes={FormattingCSS.FileUploader}
          label="Загрузите файл/файлы вашей лабораторной работы"
          multiple={true}
          handleChange={handleChange}
          name="labwork"
          types={fileTypes}
          required
        />
        <Button variant="contained" className={StudentCSS.send_button}>Проверить</Button>
      </div>
    </section>
  );
}
