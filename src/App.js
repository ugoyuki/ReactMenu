import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState,useRef } from "react";
import Menu from "./Menu";
import Calculator from "./Calculator";

//next.jsを使わずに画面遷移
function App() {
  const [isMenu, setIsMenu] = useState(false);
//useStateは値を保持するための関数

//ボタンが押されると呼び出される
  const handleClick = (flag) => {
    console.log(isMenu);
    setIsMenu(flag);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
          {/*if(isMenu = true)*/}
          {isMenu ?
                <li>
                <Link to="/Menu" onClick = {() => handleClick(false)}>TodoList</Link>
                </li>:
                <li>
                <Link to="/about" onClick = {() => handleClick(true)}>About</Link>
                </li>
          }
          <li>
                <Link to="/xx">zz</Link>
          </li>
          <li>
                <Link to="/Calculator">計算機</Link>
          </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />{/* function Aboutが追加で呼び出される*/}
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return <h2>Aboutページです。こんにちは</h2>;
}

export default App;