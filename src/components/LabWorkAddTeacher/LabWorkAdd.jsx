import React from "react";
import LabWorkAddCSS from "./LabWorkAdd.module.css";
export const LabWorkAdd = () => {
  return (
    <main className={LabWorkAddCSS.main}>
      <section className={LabWorkAddCSS.task}>
        <div className={LabWorkAddCSS.container}>
          <h2 className={LabWorkAddCSS.task__title}>
            Название лабораторной работы
          </h2>
          <p className={LabWorkAddCSS.task__teacher}>
            221-384 (номер учебной группы)
          </p>
          <p className={LabWorkAddCSS.task__text}>№ Задания</p>
          <textarea
            className={LabWorkAddCSS.task__code}
            name=""
            id=""
            placeholder="ТЕКСТ ЗАДАНИЯ (на ввод)"
          ></textarea>
          <div className={LabWorkAddCSS.task__textarea}>
            <textarea
              className={LabWorkAddCSS.task__input}
              name=""
              id=""
              placeholder="№ Входные данные (поле ввода)"
            ></textarea>
            <textarea
              className={LabWorkAddCSS.task__result}
              name=""
              id=""
              placeholder="№ На выход (поле ввода)"
            ></textarea>
          </div>
          <textarea
            className={LabWorkAddCSS.task__input_text}
            name=""
            id=""
            placeholder="Поле для ввода тестов"
          ></textarea>
          <div className={LabWorkAddCSS.send}>
            <button>Отправить</button>
          </div>
        </div>
      </section>
    </main>
  );
};
