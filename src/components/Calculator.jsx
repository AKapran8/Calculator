import React from "react";
import { Container, Current, Previous, Screen, Button } from "./Styled/styled";

const Calculator = () => {
  return (
    <Container>
      <Screen>
        <Previous></Previous>
        <Current></Current>
      </Screen>
      <Button gridSpan={2} buttonColor={'func'} >AC</Button>
      <Button buttonColor={'func'} >DEL</Button>
      <Button buttonColor={'operation'}>÷</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button buttonColor={'operation'}>*</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button buttonColor={'operation'}>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button buttonColor={'operation'}>-</Button>
      <Button buttonColor={'func'} dotBottomRadius >.</Button>
      <Button>0</Button>
      <Button gridSpan={2} buttonColor={'operation'} equalBottomRadius >=</Button>
    </Container>
  );
};

export default Calculator;
