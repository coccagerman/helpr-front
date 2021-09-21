import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import LandingPage from './components/landingPage/LandingPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <Router>
      <Header/>

      <Switch>
  
        <Route path='/' exact>
          <LandingPage/>
        </Route>

      </Switch>

      <Footer/>
    </Router>
  )
}