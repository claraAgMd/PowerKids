import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import InitialQuiz from './Pages/InitialQuiz/InitialQuiz'


function RouterApp(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<InitialQuiz/>}>Quiz</Route>
            </Routes>
        </Router>
    )
}

export default RouterApp