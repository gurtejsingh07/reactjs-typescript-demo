import { useReducer } from "react";
import { Button } from "react-bootstrap";
type counterType={
    counter:number
}
type actionType={
  type:string
}
const initialState = {
  counter: 0,
};
const reducer = (state:counterType, action:actionType) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export const Counter = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>Count:{state.counter}</h4>
      <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>Decrement</Button>
    </div>
  );
};
