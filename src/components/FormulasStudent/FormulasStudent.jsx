import { Button, TextField } from "@material-ui/core";
import React from "react";
import StudentCSS from "../../pages/styles/Student.module.css";

export function FormulaStudent() {
  return (
    <section className={StudentCSS.task}>
      <div className={StudentCSS.container}>
        <h2 className={StudentCSS.task__title}>Введите формулу для проверки</h2>
        <TextField multiline size="normal" margin="dense" className={StudentCSS.formula} fullWidth id="formula" variant="outlined" label="Ваша формула" />
        <Button variant="contained" className={StudentCSS.send_button}>Проверить</Button>
      </div>
    </section>
  );
}
