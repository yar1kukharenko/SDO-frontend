import { Button, TextField } from "@material-ui/core";
import React from "react";
import StudentCSS from "../../pages/styles/Student.module.css";

export function FunctionStudent() {
  return (
    <section className={StudentCSS.task}>
      <div className={StudentCSS.container}>
        <h2 className={StudentCSS.task__title}>Введите функцию для проверки</h2>
        <TextField
          multiline
          size="normal"
          margin="dense"
          className={StudentCSS.function}
          fullWidth
          id="function"
          variant="outlined"
          label="Ваша функция"
        />
        <Button variant="contained" className={StudentCSS.send_button}>
          Проверить
        </Button>
      </div>
    </section>
  );
}
