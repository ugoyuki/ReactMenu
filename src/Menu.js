import { useState,useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4 } from "uuid";

function Menu() {
  const i = 1

  //setTextを使うことでtextsに値を書きこむことできる。
  const [texts,setText] = useState([
    { id:uuidv4() , name:"test1", checked:false}
  ]);

  //文字列を取得する
  const refTest = useRef();

  //追加ボタンを押すと呼び出される関数
  const AddTodo = () =>{
    const name = refTest.current.value;
    //値を追加する
    setText(preValue => {
      return [...preValue,{id:2,name:name,checked:false}];
    });
    refTest.current.value = null;
  }
  //文字列の変更を検知(取得) → 追加ボタンでその値をdivタグに反映
  return (
    <div className="App">
      <TodoList texts1={texts}/>
      <input type="text" ref={refTest}/>
      <button onClick = {AddTodo}>追加</button>
      <button>削除</button>
      <div>残りの数: {i}</div>
    </div>
  );
}

export default Menu;