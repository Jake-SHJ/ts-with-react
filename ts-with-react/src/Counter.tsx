import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  // useState 사용시 generics 를 사용하지 않아도 타입 추론을 잘하기 때문에 생략해도 무관
  // 사용해야 될 상황
  // 1. 상태가 null 일 수도, 아닐수도 있는 경우
  // type Information = {name: string; description: string};
  // const [info, setInfomation] = useState<Information | null>(null);
  // 2. 상태의 타입이 까다로운 구조를 가진 객체 혹은 배열인 경우
  // type Todo = {id: number; text: string; done: boolean};
  // const [todos, setTodos] = useState<Todo[]>([]);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;