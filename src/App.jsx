import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/counterSlice";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Card>
      <h1>Counter: {count}</h1>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
      </div>
    </Card>
  );
}
