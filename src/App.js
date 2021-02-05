import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Dummy from './components/dummy'
import User from './components/user'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/skarzold">
              <User name="Skarzold" age="24" isLoggedIn={true} />
            </Route>
            <Route path="/helya">
              <User name="Helya" age="2" isLoggedIn={true} />
            </Route>
            <Route path="/">
              <Dummy />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App