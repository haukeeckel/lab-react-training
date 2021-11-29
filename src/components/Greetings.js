import React from 'react';

function Greetings({ lang, children }) {
  let greet = '';

  if (lang === 'de') {
    greet = 'Hallo';
  } else if (lang === 'fr') {
    greet = 'Bonjour';
  } else if (lang === 'en') {
    greet = 'Hello';
  } else if (lang === 'es') {
    greet = 'Hola';
  }

  return (
    <div className="flex justify-center">
      <h2 className="text-lg font-bold">
        {greet} {children}
      </h2>
    </div>
  );
}

export default Greetings;
