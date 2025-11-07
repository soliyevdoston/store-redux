import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/counterSlice";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="p-6 space-y-4 text-center shadow-md w-[300px]">
        <h1 className="text-2xl font-bold">Counter: {count}</h1>
        <div className="flex justify-center gap-2">
          <Button onClick={() => dispatch(increment())}>+</Button>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <Button variant="outline" onClick={() => dispatch(reset())}>
            Reset
          </Button>
        </div>
      </Card>
    </div>
  );
}
