import { LoadingButton } from "@mui/lab";
import { Alert } from "@mui/material";
import base64 from "base-64";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import StudentCSS from "../../pages/styles/Student.module.css";

// import { TestResults } from ".";

export function LabWorkStudent() {
  const fileTypes = ["py"];
  const [file, setFile] = useState(null);
  const [testErrors, setTestErrors] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleChange = (file) => {
    setFile(file);
  };
  const SendData = async (data) => {
    if (data === null) {
      setShowAlert(true);
      return;
    }
    setLoading(true);
    const reader = new FileReader();
    reader.readAsArrayBuffer(data);
    reader.onload = () => {
      // const encodedFile = base64.encode(reader.result);
      const encodedFile = base64.encode(
        String.fromCharCode(...new Uint8Array(reader.result))
      );
      const formData = new FormData();
      formData.append("test_file", JSON.stringify(encodedFile));
      formData.append("lang", "python");
      formData.append("test_func_name", "compute_binom");
      formData.append("test_data_var_count", 2);
      formData.append(
        "test_data",
        JSON.stringify(
          "(1,1,1), (2,1,2), (10,1,10), (10,2,45), (15,2,105), (100,3,161700), (64,7,621216192)]"
        )
      );
      formData.append("test_file_name", "compute_binom.py");
      formData.append("user", "");
      formData.append("pass", "");
      fetch("http://localhost:80/check/transfer.php?lang=python", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setTestResults(base64.decode(data.test_results));
          setTestErrors(base64.decode(data.test_errors));
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        })
        .finally(() => setLoading(false));
    };
  };

  return (
    <section className={StudentCSS.task}>
      <div className={StudentCSS.container}>
        <h2 className={StudentCSS.task__title}>Название лабораторной работы</h2>
        <p className={StudentCSS.task__teacher}>ФИО преподавателя</p>
        <p className={StudentCSS.task__text}>
          Написать класс трехдиагональных матриц (элементы отличны от нуля на
          главной диагонали, над ней и под ней, т.е. a[ i, i] != 0, a[ i, i-1]
          != 0, a[ i-1, i] != 0), храним только ненулевые элементы, матрица
          квадратная. с методами tr(след матрицы - сумма диагональных
          элементов), det (определитель), input (ввод матрицы) input() -
          запрашивает размер и элементы; input(int size) - запрашивает элементы
          или заполняет автоматически print(печать) - как матрицу, вместе с 0
          columns (количество столбцов), - возвращает количество столбцов
        </p>
        <div className={StudentCSS.data}>
          <span>Входные данные</span>
          <span>Выходные данные</span>
        </div>
        {showAlert && (
          <Alert
            className={StudentCSS.Alert}
            severity="error"
            onClose={() => {
              setShowAlert(false);
            }}
          >
            Вы не загрузили файл
          </Alert>
        )}
        <div className={StudentCSS.send}></div>
        <FileUploader
          classes={StudentCSS.FileUploader}
          label="Загрузите файл вашей лабораторной работы"
          handleChange={handleChange}
          name="labwork"
          types={fileTypes}
          required
        />
        <div className={StudentCSS.response}>
          {testResults && (
            <div>
              <h3>Результаты тестов:</h3>
              <SyntaxHighlighter language="python">
                {testResults}
              </SyntaxHighlighter>
            </div>
          )}
          {testErrors && (
            <div>
              <h3>Ошибки тестов:</h3>
              <SyntaxHighlighter language="python">
                {testErrors}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
        <LoadingButton
          onClick={() => {
            SendData(file);
          }}
          className={StudentCSS.send_button}
          loading={loading}
          variant="contained"
        >
          Отправить
        </LoadingButton>
      </div>
    </section>
  );
}
