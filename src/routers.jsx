import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InitialQuiz from './Pages/InitialQuiz/InitialQuiz'
import LearningPaths from './Pages/LearningPaths/LearningPaths'


function RouterApp(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<InitialQuiz/>}>Quiz</Route>
            <Route path='/trilhas' element={<LearningPaths/>}>Trilhas de aprendizado</Route>
            </Routes>
        </Router>
    )
}

export default RouterApp