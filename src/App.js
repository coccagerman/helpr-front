import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LandingPage from './components/landingPage/LandingPage'
import Profile from './components/profile/Profile'

export default function App() {
  return (
    <Router>
      <Header/>

      <Switch>
  
        <Route path='/' exact>
          {/* <LandingPage/> */}
          <Profile/>
        </Route>

      </Switch>

      <Footer/>
    </Router>
  )
}