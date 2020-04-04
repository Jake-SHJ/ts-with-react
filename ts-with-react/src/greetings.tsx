import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 넣어도 되고, 안넣어도 되는 값
  onClick: (name: string) => void; // 아무것도 리턴하지 않는 함수를 의미
}

const Greetings = ({name, mark, optional, onClick}: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;