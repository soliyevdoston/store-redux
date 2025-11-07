import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/counterSlice";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/card";
import { Header, Img, Main, Nav, Parent } from "./components/ui/Header";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Parent>
      <Header>
        <div>
          <h2>ContextStore</h2>
        </div>
        <Nav>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <Img
            src="https://cdn-icons.flaticon.com/svg/3916/3916598.svg?token=exp=1762507907~hmac=4439d05699d512af60a4c110581d1b8d"
            alt=""
          />
        </Nav>{" "}
      </Header>
      <Main>
        <h2>Product List:</h2>
        <div>
          <h2>Total Price :</h2>
          <Button variant="outline" onClick={() => dispatch(reset())}>
            Clear
          </Button>
        </div>
      </Main>

      <div>
        <Card>
          <h1>Counter: {count}</h1>
          <div>
            <Button onClick={() => dispatch(increment())}>+</Button>
            <Button onClick={() => dispatch(decrement())}>-</Button>
          </div>
        </Card>
      </div>
    </Parent>
  );
}
