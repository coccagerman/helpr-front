import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LandingPage from './components/landingPage/LandingPage'
import RegisterPage from './components/registerPage/RegisterPage'
import LoginPage from './components/loginPage/LoginPage'
import Profile from './components/profile/Profile'
import SearchJobs from './components/searchJobs/SearchJobs'
import JobDetail from './components/jobDetail/JobDetail'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Switch>
  
        <Route path='/' exact>
          {isLoggedIn ? <SearchJobs/> : <LandingPage/>}
        </Route>

        <Route path='/profile' exact>
          <Profile/>
        </Route>

        <Route path='/jobDetail' exact>
          <JobDetail/>
        </Route>

        <Route path='/register' >
          <RegisterPage/>
        </Route>

        <Route path='/login' >
          <LoginPage/>
        </Route>

      </Switch>

      <Footer/>
    </Router>
  )
}