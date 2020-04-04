import React from 'react';
import Greetings from "./greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`)
  }
  return <Greetings name="Jake" onClick={onClick} />
};

export default App;
