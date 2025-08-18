import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { IList } from "./type";
import Item from "./components/Item";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

export const ListStateContext = React.createContext<IList[] | null>(null);
export const ListDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);
export function useListDispatch() {
  const dispatch = useContext(ListDispatchContext);
  if (!dispatch) throw Error("error");
  return dispatch;
}

function reducerA(state: IList[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
  }
}

function App() {
  const [list, dispatch] = useReducer(reducerA, []);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };
  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="App">
      <h1>list</h1>
      <ListStateContext.Provider value={list}>
        <ListDispatchContext.Provider
          value={{
            onClickAdd,
            onClickDelete,
          }}
        >
          <Editor>
            <div>child</div>
          </Editor>
          <hr />
          <div>
            {list.map((list) => (
              <Item key={list.id} {...list} />
            ))}
          </div>
        </ListDispatchContext.Provider>
      </ListStateContext.Provider>
    </div>
  );
}

export default App;
