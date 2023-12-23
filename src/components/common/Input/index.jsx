import React from "react";
import "./style.js";
import { Label, Input as InputStyled } from "./style";
const Input = (props) => {
  return (
    <div className="input">
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputStyled
        as={props.as}
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
        value={props.value}
        className={props.className}
      />
    </div>
  );
}
export default Input;