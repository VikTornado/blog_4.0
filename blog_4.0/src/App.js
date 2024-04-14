import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from "./Components/Pages/Layout";
import Home from "./Components/Pages/Home";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path={"/layout"} element={<Layout/>}>Layout</Route>
                    <Route path={"/home"} element={<Home/>}>Layout</Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
