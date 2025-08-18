import { ReactElement, useContext, useState } from "react";
import { ListDispatchContext, useListDispatch } from "../App";

interface IProps {
  children: ReactElement;
}

export default function Editor(props: IProps) {
  const [text, setText] = useState("");
  const dispatch = useListDispatch();

  const onChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChageInput} />
      <button onClick={onClickButton}>add</button>
      {props.children}
    </div>
  );
}
