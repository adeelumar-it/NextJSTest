import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import  Home  from '../page'
import LoginPage from '../UI/login'
import Main from '../main'
import SignupForm from '../UI/signup'

const AppRouter: React.FC = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/SignupForm" element={<SignupForm />} />

                </Routes>
            </Router>
        </div>
    )
}
export default AppRouter