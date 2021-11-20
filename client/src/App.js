import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import MakeClip from './pages/MakeClips/MakeClip'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/make-clip/:uuid' exact component={MakeClip} />
    </Switch>
  </Router>
)

export default App
