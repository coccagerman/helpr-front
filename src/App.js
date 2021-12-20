import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import AuthenticationContextProvider from './context/AuthenticationContextProvider'
import ProfileContextProvider from './context/ProfileContextProvider'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LandingPage from './components/landingPage/LandingPage'
import RegisterPage from './components/registerPage/RegisterPage'
import SelectAccountType from './components/selectAccountType/SelectAccountType'
import LoginPage from './components/loginPage/LoginPage'
import Profile from './components/profile/Profile'
import SearchJobs from './components/searchJobs/SearchJobs'
import JobDetail from './components/jobDetail/JobDetail'

export default function App() {

  return (
    <AuthenticationContextProvider>
      <Router>
        <Header/>

        <Switch>
    
          <Route path='/' exact>
            <LandingPage/>
          </Route>

          <Route path='/searchJobs'>
            <SearchJobs/>
          </Route>

          <Route path='/jobDetail/:jobRecordId'>
            <JobDetail/>
          </Route>

          <Route path='/register' >
            <RegisterPage/>
          </Route>

          <Route path='/login' >
            <LoginPage/>
          </Route>

          <ProfileContextProvider>
            <Route path='/profile'>
              <Profile/>
            </Route>

            <Route path='/selectAccountType'>
              <SelectAccountType/>
            </Route>
          </ProfileContextProvider>

        </Switch>

        <Footer/>
      </Router>
    </AuthenticationContextProvider>
  )
}