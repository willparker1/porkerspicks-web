import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListPicksComponent from "./component/ListPicksComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";

function App() {
  return (
      <div>
        <HeaderComponent/>
        <div className="container">
        <Router>
            <Routes>
                <Route path="/" element={<ListPicksComponent/>} />
                <Route path="/picks"   element={<ListPicksComponent/>} ></Route>
            </Routes>
        </Router>
        </div>
        <FooterComponent/>
      </div>
  );
}

export default App;
