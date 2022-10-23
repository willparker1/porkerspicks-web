import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListPicksComponent from "./component/ListPicksComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import ListPicksAgComponent from "./component/ListPicksAgComponent";

function App() {
    return (
        <div>
            <HeaderComponent/>
            <div className="container">
                <Router>
                    <Routes>
                        <Route path="/" element={<ListPicksComponent/>} />
                        <Route path="/picks"   element={<ListPicksAgComponent/>} ></Route>
                    </Routes>
                </Router>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;
