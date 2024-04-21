import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InitialQuiz from './Pages/InitialQuiz/InitialQuiz'
import LearningPaths from './Pages/LearningPaths/LearningPaths'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import MChat from './Pages/MChat/MChat'
import Feedback from './Pages/Feedback/Feedback'
import Chat2 from './Pages/Chat2/Chat2'
import Chat3 from './Pages/Chat3/Chat3'
import Home from './Pages/Home/Home'


function RouterApp(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path='/trilhas' element={<LearningPaths/>}>Trilhas de aprendizado</Route>
            <Route path="/quiz" element={<InitialQuiz/>}>Quiz</Route>
            <Route path="/login" element={<Login/>}>Login</Route>
            <Route path="/cadastro" element={<Register/>}>Cadastro</Route>
            <Route path="/MChat" element={<MChat/>}>MChat</Route>
            <Route path="/Chat2" element={<Chat2/>}>Chat2</Route>
            <Route path="/Chat3" element={<Chat3/>}>Chat3</Route>
            <Route path="/feedback" element={<Feedback/>}>Feedbacks</Route>
            </Routes>
        </Router>
    )
}

export default RouterApp