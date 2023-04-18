import React from 'react';

export function Button({ text = 'Click Me', onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}