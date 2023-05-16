import React, { useState } from "react";
import LabWorkAddCSS from "./LabWorkAdd.module.css";
export const LabWorkAdd = () => {
  const [task, setTask] = useState({
    task_text: "",
    functions: [
      {
        name: "",
        test_cases: [{ input: [""], output: "" }],
        formulas: [{ id: "", description: "", formula: "" }],
        linked_formulas: [{ id: "", description: "", formula_ids: [""] }],
      },
    ],
    constructions: [{ name: "", state: true }],
    length_checks: [{ symbols: 0, rows: 0 }],
  });

  const handleFunctionNameChange = (index, field, value) => {
    const updatedTask = { ...task };
    updatedTask.functions[index][field] = value;
    setTask(updatedTask);
  };

  const handleTestCaseChange = (funcIndex, inputIndex, event) => {
    const { value } = event.target;
    const updatedTask = { ...task };
    updatedTask.functions[funcIndex].test_cases[inputIndex].input =
      value.split(",");
    setTask(updatedTask);
  };

  const handleFormulaChange = (funcIndex, formulaIndex, field, value) => {
    const updatedTask = { ...task };
    updatedTask.functions[funcIndex].formulas[formulaIndex] = {
      ...updatedTask.functions[funcIndex].formulas[formulaIndex],
      [field]: value,
    };
    setTask(updatedTask);
  };

  const handleLinkedFormulaChange = (
    funcIndex,
    linkedFormulaIndex,
    field,
    value
  ) => {
    const updatedTask = { ...task };
    updatedTask.functions[funcIndex].linked_formulas[linkedFormulaIndex] = {
      ...updatedTask.functions[funcIndex].linked_formulas[linkedFormulaIndex],
      [field]: value,
    };
    setTask(updatedTask);
  };

  const handleConstructionChange = (index, field, value) => {
    const updatedTask = { ...task };
    updatedTask.constructions[index][field] = value;
    setTask(updatedTask);
  };

  const handleLengthCheckChange = (index, field, value) => {
    const updatedTask = { ...task };
    updatedTask.length_checks[index][field] = value;
    setTask(updatedTask);
  };

  const addTestCase = (index) => {
    const updatedTask = { ...task };
    updatedTask.functions[index].test_cases.push({ input: [""], output: "" });
    setTask(updatedTask);
  };

  const addFormula = (index) => {
    const updatedTask = { ...task };
    updatedTask.functions[index].formulas.push({
      id: "",
      description: "",
      formula: "",
    });
    setTask(updatedTask);
  };

  const addLinkedFormula = (index) => {
    const updatedTask = { ...task };
    updatedTask.functions[index].linked_formulas.push({
      id: "",
      description: "",
      formula_ids: [""],
    });
    setTask(updatedTask);
  };

  const addConstruction = () => {
    const updatedTask = { ...task };
    updatedTask.constructions.push({ name: "", state: true });
    setTask(updatedTask);
  };

  const addLengthCheck = () => {
    const updatedTask = { ...task };
    updatedTask.length_checks.push({ symbols: 0, rows: 0 });
    setTask(updatedTask);
  };

  const addFunction = () => {
    const updatedTask = { ...task };
    updatedTask.functions.push({
      name: "",
      test_cases: [{ input: [""], output: "" }],
      formulas: [{ id: "", description: "", formula: "" }],
      linked_formulas: [{ id: "", description: "", formula_ids: [""] }],
    });
    setTask(updatedTask);
  };
  const handleRemoveTestCase = (funcIndex, inputIndex) => {
    const updatedTask = { ...task };
    const testCases = updatedTask.functions[funcIndex].test_cases;
    if (testCases.length === 1) {
      return; // Prevent removal if there is only one test case
    }
    testCases.splice(inputIndex, 1);
    setTask(updatedTask);
  };

  const handleRemoveFormula = (funcIndex, formulaIndex) => {
    const updatedTask = { ...task };
    const formulas = updatedTask.functions[funcIndex].formulas;
    if (formulas.length === 1) {
      return; // Prevent removal if there is only one formula
    }
    formulas.splice(formulaIndex, 1);
    setTask(updatedTask);
  };

  const handleRemoveLinkedFormula = (funcIndex, linkedFormulaIndex) => {
    const updatedTask = { ...task };
    const linkedFormulas = updatedTask.functions[funcIndex].linked_formulas;
    if (linkedFormulas.length === 1) {
      return; // Prevent removal if there is only one linked formula
    }
    linkedFormulas.splice(linkedFormulaIndex, 1);
    setTask(updatedTask);
  };

  const handleRemoveFunction = (funcIndex) => {
    if (task.functions.length === 1) {
      return; // Prevent removal if there is only one function
    }
    const updatedTask = { ...task };
    updatedTask.functions.splice(funcIndex, 1);
    setTask(updatedTask);
  };

  const handleRemoveConstruction = (constructionIndex) => {
    if (task.constructions.length === 1) {
      return; // Prevent removal if there is only one construction
    }
    const updatedTask = { ...task };
    updatedTask.constructions.splice(constructionIndex, 1);
    setTask(updatedTask);
  };

  const handleRemoveLengthCheck = (lengthCheckIndex) => {
    if (task.length_checks.length === 1) {
      return; // Prevent removal if there is only one length check
    }
    const updatedTask = { ...task };
    updatedTask.length_checks.splice(lengthCheckIndex, 1);
    setTask(updatedTask);
  };

  const handleLinkedFormulaIdsChange = (
    funcIndex,
    linkedFormulaIndex,
    event
  ) => {
    const { value } = event.target;
    const updatedTask = { ...task };
    updatedTask.functions[funcIndex].linked_formulas[
      linkedFormulaIndex
    ].formula_ids = value.split(",");
    setTask(updatedTask);
  };

  const SendData = async (data) => {
    const url = "http://localhost:8000/newtask";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      if (response.ok) {
        console.log("Данные успешно отправлены на сервер");
        console.log(response);
      } else {
        console.log("Ошибка при отправке данных на сервер");
      }
    } catch (error) {
      console.log("Произошла сетевая ошибка", error);
    }
  };

  // fetch("http://localhost:8000/tasks")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Обработка полученных данных
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     // Обработка ошибок
  //     console.error(error);
  //   });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Отправка задачи на сервер или дальнейшая обработка
    const jsonData = JSON.stringify({ lab_task: task });

    console.log(jsonData);
    SendData(jsonData);
    // console.log(task);
  };

  return (
    <form className={LabWorkAddCSS.form} onSubmit={handleSubmit}>
      <label className={LabWorkAddCSS.form__task_text}>
        Название теста
        <input
          className={LabWorkAddCSS.input}
          type="text"
          value={task.task_text}
          onChange={(event) =>
            setTask({ ...task, task_text: event.target.value })
          }
        />
      </label>

      {task.functions.map((func, funcIndex) => (
        <div
          className={LabWorkAddCSS.form__functions}
          key={`function-${funcIndex}`}
        >
          <h3 className={LabWorkAddCSS.h3}>Функция {funcIndex + 1}</h3>
          <button className={LabWorkAddCSS.button} onClick={addFunction}>
            Добавить функцию
          </button>
          <button
            className={LabWorkAddCSS.button}
            onClick={() => handleRemoveFunction(funcIndex)}
          >
            Удалить функцию
          </button>
          <label className={LabWorkAddCSS.form__FuncName}>
            Имя функции:
            <input
              className={LabWorkAddCSS.input}
              type="text"
              value={func.name}
              onChange={(event) => {
                const updatedTask = { ...task };
                updatedTask.functions[funcIndex].name = event.target.value;
                setTask(updatedTask);
              }}
            />
          </label>
          <div className={LabWorkAddCSS.wrapper}>
            {func.test_cases.map((testCase, inputIndex) => (
              <div
                className={LabWorkAddCSS.test_cases}
                key={`test-case-${inputIndex}`}
              >
                <label className={LabWorkAddCSS.test_case_input}>
                  Тест {inputIndex + 1} Входные данные (через запятую, без
                  пробелов):
                  <input
                    className={LabWorkAddCSS.input}
                    type="text"
                    value={testCase.input.join(",")}
                    onChange={(event) =>
                      handleTestCaseChange(funcIndex, inputIndex, event)
                    }
                  />
                </label>

                <label>
                  Тест {inputIndex + 1} Выходные данные:
                  <input
                    className={LabWorkAddCSS.input}
                    type="text"
                    value={testCase.output}
                    onChange={(event) => {
                      const updatedTask = { ...task };
                      updatedTask.functions[funcIndex].test_cases[
                        inputIndex
                      ].output = event.target.value;
                      setTask(updatedTask);
                    }}
                  />
                </label>
                <button
                  className={LabWorkAddCSS.button}
                  onClick={() => addTestCase(funcIndex)}
                >
                  Добавить тест
                </button>
                <button
                  className={LabWorkAddCSS.button}
                  onClick={() => handleRemoveTestCase(funcIndex, inputIndex)}
                >
                  Удалить тест
                </button>
              </div>
            ))}
          </div>
          <div className={LabWorkAddCSS.wrapper}>
            {func.formulas.map((formula, formulaIndex) => (
              <div
                className={LabWorkAddCSS.formulas}
                key={`formula-${formulaIndex}`}
              >
                <label>
                  ID формулы:
                  <input
                    className={LabWorkAddCSS.input}
                    type="text"
                    value={formula.id}
                    onChange={(event) =>
                      handleFormulaChange(
                        funcIndex,
                        formulaIndex,
                        "id",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Описание формулы:
                  <input
                    className={LabWorkAddCSS.input}
                    type="text"
                    value={formula.description}
                    onChange={(event) =>
                      handleFormulaChange(
                        funcIndex,
                        formulaIndex,
                        "description",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Формула:
                  <input
                    className={LabWorkAddCSS.input}
                    type="text"
                    value={formula.formula}
                    onChange={(event) =>
                      handleFormulaChange(
                        funcIndex,
                        formulaIndex,
                        "formula",
                        event.target.value
                      )
                    }
                  />
                </label>
                <button
                  className={LabWorkAddCSS.button}
                  onClick={() => addFormula(funcIndex)}
                >
                  Добавить формулу
                </button>
                <button
                  className={LabWorkAddCSS.button}
                  onClick={() => handleRemoveFormula(funcIndex, formulaIndex)}
                >
                  Удалить формулу
                </button>
              </div>
            ))}
          </div>
          <div className={LabWorkAddCSS.wrapper}>
            {func.linked_formulas.map((linkedFormula, linkedFormulaIndex) => (
              <div
                className={LabWorkAddCSS.linked_formulas}
                key={`linked-formula-${linkedFormulaIndex}`}
              >
                <label>
                  ID связанных формул:
                  <input
                    className={LabWorkAddCSS.input}
                    type="text"
                    value={linkedFormula.id}
                    onChange={(event) =>
                      handleLinkedFormulaChange(
                        funcIndex,
                        linkedFormulaIndex,
                        "id",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Описание связанных формул:
                  <input
                    className={LabWorkAddCSS.input}
                    type="text"
                    value={linkedFormula.description}
                    onChange={(event) =>
                      handleLinkedFormulaChange(
                        funcIndex,
                        linkedFormulaIndex,
                        "description",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  ID'и формул (через запятую, без пробелов):
                  <input
                    className={LabWorkAddCSS.input}
                    type="text"
                    value={linkedFormula.formula_ids.join(",")}
                    onChange={(event) =>
                      handleLinkedFormulaIdsChange(
                        funcIndex,
                        linkedFormulaIndex,
                        event
                      )
                    }
                  />
                </label>

                <button
                  className={LabWorkAddCSS.button}
                  onClick={() => addLinkedFormula(funcIndex)}
                >
                  Добавить связанные формулы
                </button>
                <button
                  className={LabWorkAddCSS.button}
                  onClick={() =>
                    handleRemoveLinkedFormula(funcIndex, linkedFormulaIndex)
                  }
                >
                  Удалить связанные формулы
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className={LabWorkAddCSS.wrapper}>
        {task.constructions.map((construction, constructionIndex) => (
          <div
            className={LabWorkAddCSS.constructions}
            key={`construction-${constructionIndex}`}
          >
            <div className={LabWorkAddCSS.construction_wrapper}>
              <label>
                Конструкция:
                <input
                  className={LabWorkAddCSS.input}
                  type="text"
                  value={construction.name}
                  onChange={(event) =>
                    handleConstructionChange(
                      constructionIndex,
                      "name",
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                Состояние проверки:
                <input
                  className={LabWorkAddCSS.input}
                  type="checkbox"
                  checked={construction.state}
                  onChange={(event) =>
                    handleConstructionChange(
                      constructionIndex,
                      "state",
                      event.target.checked
                    )
                  }
                />
              </label>
            </div>
            <button className={LabWorkAddCSS.button} onClick={addConstruction}>
              Добавить конструкцию
            </button>
            <button
              className={LabWorkAddCSS.button}
              onClick={() => handleRemoveConstruction(constructionIndex)}
            >
              Удалить конструкцию
            </button>
          </div>
        ))}
      </div>

      <div className={LabWorkAddCSS.wrapper}>
        {task.length_checks.map((lengthCheck, lengthCheckIndex) => (
          <div
            className={LabWorkAddCSS.length_checks}
            key={`length-check-${lengthCheckIndex}`}
          >
            <label>
              Количество символов:
              <input
                className={LabWorkAddCSS.input}
                type="number"
                value={lengthCheck.symbols}
                onChange={(event) =>
                  handleLengthCheckChange(
                    lengthCheckIndex,
                    "symbols",
                    event.target.value
                  )
                }
              />
            </label>

            <label>
              Количество строк:
              <input
                className={LabWorkAddCSS.input}
                type="number"
                value={lengthCheck.rows}
                onChange={(event) =>
                  handleLengthCheckChange(
                    lengthCheckIndex,
                    "rows",
                    event.target.value
                  )
                }
              />
            </label>
            <button className={LabWorkAddCSS.button} onClick={addLengthCheck}>
              Добавить проверку длины
            </button>
            <button
              className={LabWorkAddCSS.button}
              onClick={() => handleRemoveLengthCheck(lengthCheckIndex)}
            >
              Удалить проверку длины
            </button>
          </div>
        ))}
      </div>

      <button className={LabWorkAddCSS.button} type="submit">
        Отправить
      </button>
    </form>
  );
};
