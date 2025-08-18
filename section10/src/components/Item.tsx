import React from "react";
import { IList } from "../type";
import { useListDispatch } from "../App";

interface IProps extends IList {
  extra?: string;
}
export default function Item(props: IProps) {
  const dispatch = useListDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };
  return (
    <li>
      {props.content}
      <button onClick={onClickButton}>remove</button>
    </li>
  );
}
