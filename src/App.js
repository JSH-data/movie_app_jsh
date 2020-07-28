import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation"
import "./App.css";


function App() {
  return <HashRouter>
    <Navigation /> 
    <Route path="/" exact={true} component = {Home} />
    <Route path="/about" component = {About} />
    <Route path="/movie/:id" component = {Detail} /> 
  </HashRouter>
}
//Movie의 pathname과 왜 다른지 모르겠음...
// Link 태그를 가지고 있는 Navigation은 라우터 밖에 위치할 수 없다.
// exact={true}는 Route가 랜더링할때 주소가 중복되어도 그것만 표시할 수 있도록 도와주는 기능을 가진다.
export default App;