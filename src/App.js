import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LandingPage from './components/landingPage/LandingPage'
import RegisterPage from './components/registerPage/RegisterPage'
import LoginPage from './components/loginPage/LoginPage'
import Profile from './components/profile/Profile'
import JobDetail from './components/jobDetail/JobDetail'

export default function App() {
  return (
    <Router>
      <Header/>

      <Switch>
  
        <Route path='/' exact>
          {/* <LandingPage/> */}
          {/* <Profile/> */}
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