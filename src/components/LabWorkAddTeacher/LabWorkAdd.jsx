import React, { useState } from "react";
import "./LabWorkAdd.css";
export const LabWorkAdd = () => {
  const [task, setTask] = useState({
    task_test: "",
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

  const handleTestCaseChange = (index, inputIndex, value) => {
    const updatedTask = { ...task };
    updatedTask.functions[index].test_cases[inputIndex].input[0] = value;
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Отправка задачи на сервер или дальнейшая обработка
    const jsonData = JSON.stringify(task);
    console.log(jsonData);

    // console.log(task);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__task_test">
        Название теста
        <input
          type="text"
          value={task.task_test}
          onChange={(event) =>
            setTask({ ...task, task_test: event.target.value })
          }
        />
      </label>

      {task.functions.map((func, funcIndex) => (
        <div className="form__functions" key={`function-${funcIndex}`}>
          <h3>Функция {funcIndex + 1}</h3>
          <button onClick={addFunction}>Добавить функцию</button>
          <button onClick={() => handleRemoveFunction(funcIndex)}>
            Удалить функцию
          </button>
          <label className="form__FuncName">
            Имя функции:
            <input
              type="text"
              value={func.name}
              onChange={(event) => {
                const updatedTask = { ...task };
                updatedTask.functions[funcIndex].name = event.target.value;
                setTask(updatedTask);
              }}
            />
          </label>
          {func.test_cases.map((testCase, inputIndex) => (
            <div className="test_cases" key={`test-case-${inputIndex}`}>
              <label className="test_case_input">
                Тест {inputIndex + 1} Входные данные:
                <input
                  type="text"
                  value={testCase.input[0]}
                  onChange={(event) =>
                    handleTestCaseChange(
                      funcIndex,
                      inputIndex,
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                Тест {inputIndex + 1} Выходные данные:
                <input
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
                onClick={() => handleRemoveTestCase(funcIndex, inputIndex)}
              >
                Удалить тест
              </button>
            </div>
          ))}

          <button onClick={() => addTestCase(funcIndex)}>Добавить тест</button>

          {func.formulas.map((formula, formulaIndex) => (
            <div className="formulas" key={`formula-${formulaIndex}`}>
              <label>
                ID формулы:
                <input
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
                onClick={() => handleRemoveFormula(funcIndex, formulaIndex)}
              >
                Удалить формулу
              </button>
              <button onClick={() => addFormula(funcIndex)}>
                Добавить формулу
              </button>
            </div>
          ))}

          {func.linked_formulas.map((linkedFormula, linkedFormulaIndex) => (
            <div
              className="linked_formulas"
              key={`linked-formula-${linkedFormulaIndex}`}
            >
              <label>
                ID связанных формул:
                <input
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
                ID'и формул:
                <input
                  type="text"
                  value={linkedFormula.formula_ids[0]}
                  onChange={(event) => {
                    const updatedTask = { ...task };
                    updatedTask.functions[funcIndex].linked_formulas[
                      linkedFormulaIndex
                    ].formula_ids[0] = event.target.value;
                    setTask(updatedTask);
                  }}
                />
              </label>
              <button
                onClick={() =>
                  handleRemoveLinkedFormula(funcIndex, linkedFormulaIndex)
                }
              >
                Удалить связанные формулы
              </button>
              <button onClick={() => addLinkedFormula(funcIndex)}>
                Добавить связанные формулы
              </button>
            </div>
          ))}
        </div>
      ))}

      {task.constructions.map((construction, constructionIndex) => (
        <div
          className="constructions"
          key={`construction-${constructionIndex}`}
        >
          <label>
            Конструкция:
            <input
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
          <button onClick={addConstruction}>Добавить конструкцию</button>
        </div>
      ))}

      {task.length_checks.map((lengthCheck, lengthCheckIndex) => (
        <div className="length_checks" key={`length-check-${lengthCheckIndex}`}>
          <label>
            Количество символов:
            <input
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
          <button onClick={addLengthCheck}>Добавить проверку длины</button>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};
