import {Route, Routes,Navigate} from 'react-router-dom'
import Home from './components/Home'
import HealthTips from './components/HealthTips'
import RecreationalActivities from './components/RecreationalActivities'
import CommonProblems from './components/CommonProblems'
import HealthCalculator from './components/HealthCalculator'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/health-tips" element={<HealthTips/>} />
    <Route exact path="/recreational-activities" element={<RecreationalActivities/>} />
    <Route exact path ="/common-problems" element={<CommonProblems/>} />
    <Route exact path = "/health-calculator" element={<HealthCalculator/>} />
    <Route  path="/not-found" element={<NotFound/>} />
    <Route
        path="*"
        element={<Navigate to="/not-found" replace />}
    />
  </Routes>
)

export default App