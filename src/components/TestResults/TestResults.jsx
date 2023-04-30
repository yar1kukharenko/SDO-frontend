import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
export const testResults = (className, testResults, testErrors, language) => {
  return (
    <div className={className}>
      {testResults && (
        <div>
          <h3>Результаты тестов:</h3>
          <SyntaxHighlighter language={language}>
            {testResults}
          </SyntaxHighlighter>
        </div>
      )}
      {testErrors && (
        <div>
          <h3>Ошибки тестов:</h3>
          <SyntaxHighlighter language={language}>
            {testErrors}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
