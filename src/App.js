import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import ProfileContextProvider from './context/ProfileContextProvider'
import AuthenticationContextProvider from './context/AuthenticationContextProvider'
import ChatContextProvider from './context/ChatContextProvider'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LandingPage from './components/landingPage/LandingPage'
import RegisterPage from './components/registerPage/RegisterPage'
import SelectAccountType from './components/selectAccountType/SelectAccountType'
import LoginPage from './components/loginPage/LoginPage'
import MyProfile from './components/myProfile/MyProfile'
import Profile from './components/profile/Profile'
import SearchJobs from './components/searchJobs/SearchJobs'
import SearchCandidates from './components/searchCandidates/SearchCandidates'
import JobDetail from './components/jobDetail/JobDetail'
import JobPanel from './components/jobPanel/JobPanel'
import ChatPanel from './components/chatPanel/ChatPanel'
import ChatRoom from './components/chatRoom/ChatRoom'


export default function App() {

  return (
    <ProfileContextProvider>
      <AuthenticationContextProvider>
        <ChatContextProvider>

          <Router>
            <Header/>

            <Switch>
        
              <Route path='/' exact>
                <LandingPage/>
              </Route>

              <Route path='/register' >
                <RegisterPage/>
              </Route>

              <Route path='/login' >
                <LoginPage/>
              </Route>

              <Route path='/selectAccountType'>
                <SelectAccountType/>
              </Route>

              <Route path='/myProfile'>
                <MyProfile/>
              </Route>

              <Route path='/profile/:userId'>
                <Profile/>
              </Route>

              <Route path='/searchJobs'>
                <SearchJobs/>
              </Route>

              <Route path='/jobDetail/:jobRecordId'>
                <JobDetail/>
              </Route>

              <Route path='/jobPanel/:jobRecordId'>
                <JobPanel/>
              </Route>

              <Route path='/searchCandidates'>
                <SearchCandidates/>
              </Route>

              <Route path='/chatPanel'>
                <ChatPanel/>
              </Route>

              <Route path='/chatRoom/:chatroomId'>
                <ChatRoom/>
              </Route>

            </Switch>

            <Footer/>
          </Router>
          
        </ChatContextProvider>
      </AuthenticationContextProvider>
    </ProfileContextProvider>
  )
}