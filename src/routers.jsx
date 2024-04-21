import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InitialQuiz from './Pages/InitialQuiz/InitialQuiz'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import MChat from './Pages/MChat/MChat'
import Feedback from './Pages/Feedback/Feedback'


function RouterApp(){
    return(
        <Router>
            <Routes>
            <Route path="/quiz" element={<InitialQuiz/>}>Quiz</Route>
            <Route path="/login" element={<Login/>}>Login</Route>
            <Route path="/cadastro" element={<Register/>}>Cadastro</Route>
            <Route path="/MChat" element={<MChat/>}>MChat</Route>
            <Route path="/feedback" element={<Feedback/>}>MChat</Route>
            </Routes>
        </Router>
    )
}

export default RouterApp