import React from "react";
import ReducerSample from "./ReducerSample";
import MyForm from "./useRef";

const App: React.FC = () => {
  // return <ReducerSample />
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
};

export default App;
